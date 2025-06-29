from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import chromadb
import os
from chromadb.utils import embedding_functions

app = FastAPI()

# Enable CORS for frontend access (you can restrict origins in production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# 📁 Load CSV File
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CSV_PATH = os.path.join(BASE_DIR, "data.csv")

df = pd.read_csv(CSV_PATH)
print("🧠 CSV Columns:", df.columns.tolist())

# Clean data (remove rows with missing content)
column_to_embed = "content"
df = df.dropna(subset=[column_to_embed])

# 🔎 Setup ChromaDB with SentenceTransformer
chroma_client = chromadb.Client()
embedding_fn = embedding_functions.SentenceTransformerEmbeddingFunction(model_name="all-MiniLM-L6-v2")

# Recreate collection if already exists
if "csv_data" in [c.name for c in chroma_client.list_collections()]:
    chroma_client.delete_collection("csv_data")

collection = chroma_client.create_collection(name="csv_data", embedding_function=embedding_fn)

# 🧠 Insert documents into Chroma
for i, row in df.iterrows():
    text = str(row[column_to_embed]).strip()
    if text:
        collection.add(
            documents=[text],
            metadatas=[{
                "row": i,
                "title": row.get("title", ""),
                "content": text,
                "category": row.get("category", ""),
                "date": row.get("date", "")
            }],
            ids=[f"id_{i}"]
        )

# ✅ Root route to test server status
@app.get("/")
def root():
    return {"message": "✅ Backend working!"}

# 🔍 Semantic Search Endpoint
@app.get("/api/search")
def search(q: str = Query(..., description="Your search query")):
    if not q.strip():
        return {"error": "Empty query"}

    results = collection.query(query_texts=[q], n_results=5)

    formatted = []
    for doc, meta, score in zip(
        results["documents"][0],
        results["metadatas"][0],
        results["distances"][0]
    ):
        formatted.append({
            "title": meta.get("title", ""),
            "content": meta.get("content", doc),
            "category": meta.get("category", ""),
            "date": meta.get("date", ""),
            "score": round(score, 4)
        })

    return {
        "query": q,
        "results": formatted
    }

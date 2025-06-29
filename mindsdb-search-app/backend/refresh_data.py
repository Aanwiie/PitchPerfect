# Optional: Periodic ingestion of new data
import pandas as pd
import chromadb
from chromadb.utils import embedding_functions

df = pd.read_csv("data.csv")
client = chromadb.Client()
embedding_fn = embedding_functions.SentenceTransformerEmbeddingFunction(model_name="all-MiniLM-L6-v2")

collection = client.get_or_create_collection("csv_data", embedding_function=embedding_fn)
existing_ids = set(collection.get()["ids"])

for i, row in df.iterrows():
    _id = f"id_{i}"
    if _id not in existing_ids:
        collection.add(
            documents=[row["content"]],
            metadatas=[{
                "row": i,
                "title": row["title"],
                "category": row["category"],
                "date": row["date"]
            }],
            ids=[_id]
        )

import os
import pandas as pd
import chromadb
from chromadb.utils.embedding_functions import SentenceTransformerEmbeddingFunction

# ✅ Lighter embedding model to avoid memory issues
embedding_func = SentenceTransformerEmbeddingFunction(model_name="paraphrase-MiniLM-L3-v2")


# ✅ New ChromaDB client config (no deprecated settings)
chroma_client = chromadb.PersistentClient(path="./chroma_storage")

# ✅ Create or load collection
collection = chroma_client.get_or_create_collection(
    name="research_kb",
    embedding_function=embedding_func
)

# ✅ CSV ingestion: convert rows to plain text and add metadata
def ingest_csv(csv_path):
    df = pd.read_csv(csv_path)
    docs = df.astype(str).apply(lambda row: " | ".join(row), axis=1).tolist()

    if collection.count() == 0:
        collection.add(
            documents=docs,
            ids=[f"id_{i}" for i in range(len(docs))],
            metadatas=df.to_dict(orient="records")
        )
        print("✅ CSV data ingested into ChromaDB")
    else:
        print("⚠️ ChromaDB already has data. Skipping ingestion.")

# ✅ Semantic search with optional metadata filter
def search(query: str, filter_by: dict = None):
    result = collection.query(
        query_texts=[query],
        n_results=5,
        where=filter_by
    )
    return result

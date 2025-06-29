export async function searchNews(query: string) {
  const response = await fetch("http://127.0.0.1:5000/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    const errData = await response.json();
    throw new Error(errData.error || "Something went wrong");
  }

  const data = await response.json();

  // Safely parse the format from ChromaDB
  const documents = data?.documents?.[0] || [];
  const metadatas = data?.metadatas?.[0] || [];

  return documents.map((content: string, i: number) => ({
    title: metadatas[i]?.title || `Result ${i + 1}`,
    content,
    source: metadatas[i]?.source || "Unknown",
  }));
}

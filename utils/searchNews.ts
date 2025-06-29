export async function searchNews(query: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

  const response = await fetch(`${apiUrl}/api/search?q=${encodeURIComponent(query)}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json(); // ✅ Only call once!

  if (!response.ok) {
    throw new Error(data.error || `HTTP ${response.status}: ${response.statusText}`);
  }

  console.log("✅ Backend data:", data);

  return (data.results || []).map((item: any, i: number) => ({
    title: item.title || `Startup ${i + 1}`,
    content: item.content || "No description provided.",
    source: item.category || "Uncategorized",
  }));
}

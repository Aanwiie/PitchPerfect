export async function searchNews(query: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

  const response = await fetch(`${apiUrl}/api/search?q=${encodeURIComponent(query)}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    let errMessage = "Something went wrong";
    try {
      const errData = await response.json();
      errMessage = errData?.error || errMessage;
    } catch {
      errMessage = `HTTP ${response.status}: ${response.statusText}`;
    }
    throw new Error(errMessage);
  }

  const data = await response.json();

  console.log("✅ Backend data:", data); // Debug log (optional)

  // Normalize and return in frontend-friendly format
  return (data.results || []).map((item: any, i: number) => ({
    title: item.title || `Startup ${i + 1}`,
    content: item.content || "No description provided.",
    source: item.category || "Uncategorized",
  }));
}

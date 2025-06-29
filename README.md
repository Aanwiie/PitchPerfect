# 🧠 PitchPerfect – Semantic Search for Startups

**PitchPerfect** is an intelligent semantic search platform that helps you discover startup-related content using natural language queries. Powered by `FastAPI`, `ChromaDB`, and `SentenceTransformer` embeddings, it delivers relevant, contextual search results — inspired by the AI-querying philosophy of **MindsDB**.

---

## ✨ What Makes It Unique?

🔍 **Semantic Search, Not Just Keywords**  
Unlike traditional search engines, PitchPerfect understands the **intent** behind your query.

💡 **MindsDB-Inspired Architecture**  
Just like MindsDB lets users query ML models using SQL, PitchPerfect applies that approach to text — enabling AI-native querying of startup information.

🧠 **MiniLM Embeddings + ChromaDB**  
Startup data is converted into high-dimensional vectors using `MiniLM-L6-v2` and stored in `ChromaDB` for fast similarity comparison.

⚡ **Real-Time, Relevant Results**  
Queries like _"early-stage fintech in Asia"_ or _"AI startups after 2021"_ return smart, ranked startup insights.

---

## 🛠 Tech Stack

| Layer        | Tech                             | Purpose                                |
|--------------|----------------------------------|----------------------------------------|
| ⚛️ Frontend   | Next.js, React, TailwindCSS       | Responsive user interface              |
| 🔙 Backend    | FastAPI, Pandas, ChromaDB         | API and semantic vector search         |
| 🧠 Embeddings | SentenceTransformers (MiniLM)     | Contextual understanding of content    |
| 🚀 Inspired by| MindsDB                           | Unified ML + data querying approach    |
| 🌐 Deployment | Vercel (frontend), Render (API)   | Seamless and scalable hosting          |

---

## ⚙️ How It Works

1. **Startup Data**: Stored in `data.csv`
2. **Backend**:
   - Reads the CSV
   - Embeds each row using `SentenceTransformer`
   - Adds them to a `ChromaDB` collection
3. **Query**:
   - User inputs a natural language search
   - FastAPI embeds the query, searches the DB, and returns top results
4. **Frontend**:
   - Fetches `/search?q=...` results
   - Displays as styled `StartupCard` components

---

## 🧩 MindsDB Influence

PitchPerfect follows the **MindsDB mindset**:
- Embed intelligence directly into data
- Query AI models like databases
- Simplify access to ML-powered results

It replaces MindsDB’s SQL interface with a clean UI and vector backend — but the core idea is the same: **Ask meaningful questions, get meaningful answers**.

---

## 📁 Project Structure

pitchperfect/
├── backend/ # FastAPI server
│ ├── app.py
│ ├── data.csv
│ └── requirements.txt
├── frontend/ # Next.js frontend
│ ├── app/
│ ├── components/
│ ├── utils/
│ └── .env.local

yaml
Copy
Edit

---

## 🚀 Setup & Development

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: .\venv\Scripts\activate
pip install -r requirements.txt
uvicorn app:app --reload
Frontend
bash
Copy
Edit
cd frontend
pnpm install
pnpm dev
Create .env.local:

bash
Copy
Edit
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
📦 Deployment Guide
Frontend: Deploy frontend/ to Vercel

Backend: Deploy backend/ to Render using:

sql
Copy
Edit
Start command: uvicorn app:app --host 0.0.0.0 --port 10000
Set the frontend env var:

bash
Copy
Edit
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
🙋‍♀️ Author
@Aanwiie
Designer • Developer • Semantic Search Enthusiast
“Bringing minds into machines — one query at a time.”

![pp1 (7)](https://github.com/user-attachments/assets/3068f4d4-7099-4b76-8b20-6a2a96cba034)
![pp1 (6)](https://github.com/user-attachments/assets/e34035f5-3264-4730-b419-5d855d1dd397)
![pp1 (5)](https://github.com/user-attachments/assets/707b9dac-a2b9-4676-8787-95a19b95d232)
![pp1 (4)](https://github.com/user-attachments/assets/8cf9ca84-0008-4508-9886-94f99c68f1d1)
![pp1 (3)](https://github.com/user-attachments/assets/4ea1530a-0969-42d0-a1ae-cf9b9c5ae11e)
![pp1 (2)](https://github.com/user-attachments/assets/8bfb26da-d528-4d83-b98d-c2677588169d)
![pp1 (1)](https://github.com/user-attachments/assets/4e7c8b44-92e3-4ae6-864c-fc8990fab0c1)

# 🧠 PitchPerfect – Semantic Search for Startups

**PitchPerfect** is an intelligent semantic search platform that helps you discover startup-related content using natural language queries. Powered by `FastAPI`, `ChromaDB`, and `SentenceTransformer` embeddings, it delivers relevant, contextual results — inspired by the ML-querying philosophy of **MindsDB**.

---

## 📖 Description

PitchPerfect is an **AI-driven search assistant** built for startup discovery. It empowers users to:

✅ **Search with natural language** (not just keywords)  
✅ **Analyze startup risk levels** through contextual clues  
✅ **Summarize startup content** for fast comprehension  
✅ **Surface top investor picks** based on relevance  
✅ Use a **MindsDB-style querying approach** with real-time answers

Whether you're a founder, investor, or researcher — PitchPerfect helps you find what **matters**, not just what matches.

---

## ✨ Screenshots

> Replace the image paths with actual screenshot URLs or local files

### 🏠 Homepage
![Homepage](./screenshots/homepage.png)

### 🔍 Search Results
![Search Results](./screenshots/results.png)

### 🧠 AI Summary & Risk Analysis
![AI Summary](./screenshots/summary.png)

---

## 🧠 MindsDB Shortcut

Inspired by [MindsDB](https://mindsdb.com), PitchPerfect integrates the core principle of **AI-native querying**.

Want to build your own ML + database app using SQL?

👉 **Get started instantly with MindsDB:**  
[🌐 mindsdb.com/docs](https://mindsdb.com/docs)

You’ll learn how to:
- Run ML models inside your DB
- Predict data with a single SELECT
- Build intelligent apps without ML engineering

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

1. **CSV-based startup data** is loaded into the backend
2. Each row is embedded using `MiniLM` transformer
3. Vectors are stored in `ChromaDB` for real-time retrieval
4. Queries are semantically matched and returned via FastAPI
5. Frontend displays results as stylized cards — complete with summary, risk tag, and source

---

## 🧩 MindsDB-Like Features

| Feature                      | PitchPerfect Style                | MindsDB Inspiration          |
|-----------------------------|-----------------------------------|------------------------------|
| Semantic document search    | `/search?q=...` (FastAPI)         | `SELECT * FROM model WHERE` |
| Vector similarity engine    | ChromaDB + MiniLM embeddings      | AI model predictions         |
| Risk-level tagging          | Context-aware summary logic       | Predictive field generation |
| Summary & AI metadata       | Backend preprocessing             | Auto-generated fields        |

---

## 🛠 Local Setup

### Backend (FastAPI)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # or .\venv\Scripts\activate (Windows)
pip install -r requirements.txt
uvicorn app:app --reload
Frontend (Next.js)
bash
Copy
Edit
cd frontend
pnpm install
pnpm dev
Add .env.local in frontend/:

bash
Copy
Edit
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
📁 Project Structure
pgsql
Copy
Edit
pitchperfect/
├── backend/
│   ├── app.py
│   ├── data.csv
│   └── requirements.txt
├── frontend/
│   ├── components/
│   ├── utils/
│   ├── app/
│   └── .env.local
└── screenshots/
    ├── homepage.png
    ├── results.png
    └── summary.png
🚀 Deployment
Backend on Render
Deploy backend/

Use:

sql
Copy
Edit
Start Command: uvicorn app:app --host 0.0.0.0 --port 10000
Frontend on Vercel
Deploy frontend/

In your project settings, set:

env
Copy
Edit
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
👤 Author
@Aanwiie
UI/UX Designer • Fullstack Dev • Semantic Search Builder
“Designing apps that don’t just look smart — they are smart.”

📜 License
MIT License — open to all, for learning or deployment.


@Aanwiie
Designer • Developer • Semantic Search Enthusiast
“Bringing minds into machines — one query at a time.”


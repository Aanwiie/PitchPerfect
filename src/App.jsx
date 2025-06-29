import { useState } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const res = await axios.post('http://localhost:5000/query', { query });
    setResults(res.data.data);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Semantic Search</h1>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Ask something..." />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((item, i) => (
          <li key={i}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { searchProducts } from "./api";

function App() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const results = await searchProducts(query);
    setProducts(results);
    setLoading(false);
  };

  return (
    <div className="app">
      <h1>🛒 Price Compare Tool</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Compare</button>

      {loading && <p>Loading...</p>}

      {products.length > 0 ? (
        <div className="grid">
          {products.map((p) => (
            <div key={p.id} className="card">
              <img src={p.thumbnail} alt={p.title} />
              <h3>{p.title}</h3>
              <p>${p.price}</p>
            </div>
          ))}
        </div>
      ) : (
        !loading && <p>No results found. Try another search.</p>
      )}
    </div>
  );
}

export default App;

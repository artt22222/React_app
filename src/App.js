import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AttractionCard from './components/AttractionCard';
import attractions from './data/attractions';

function App() {
  const [active, setActive] = useState(null);

  return (
    <div className="App">
      <Header />

      <main className="container main-grid">
        {attractions.map((a) => (
          <AttractionCard key={a.id} item={a} onOpen={setActive} />
        ))}
      </main>

      {active && (
        <div className="modal" onClick={() => setActive(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setActive(null)}>
              ×
            </button>
            <img src={active.image} alt={active.name} />
            <h2>{active.name}</h2>
            <p className="location">{active.location}</p>
            <p className="description">{active.description}</p>
            <div className="tags">
              {active.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

import React from 'react';

export default function AttractionCard({ item, onOpen }) {
  return (
    <article className="card" onClick={() => onOpen(item)}>
      <div className="card-media">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="card-body">
        <h3>{item.name}</h3>
        <p className="location">{item.location}</p>
        <p className="short">{item.short}</p>
        <div className="tags">
          {item.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

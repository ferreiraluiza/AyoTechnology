// ScrollableComponent.jsx
import React from 'react';
import './scrollbar.css'; // Importe seu CSS

const ScrollableComponent = () => {
  return (
    <div className="h-64 overflow-y-auto scrollable-element p-4">
      {/* Conteúdo longo para permitir rolagem */}
      <p>Conteúdo longo...</p>
      <p>Conteúdo longo...</p>
      <p>Conteúdo longo...</p>
      <p>Conteúdo longo...</p>
      <p>Conteúdo longo...</p>
      <p>Conteúdo longo...</p>
      <p>Conteúdo longo...</p>
      <p>Conteúdo longo...</p>
      <p>Conteúdo longo...</p>
      <p>Conteúdo longo...</p>
      <p>Conteúdo longo...</p>
    </div>
  );
};

export default ScrollableComponent;

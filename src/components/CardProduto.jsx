import React from "react";
export default function CardProduto({ nome, imagem, preco }) {
  return (
    <div className="card">
      <img src={imagem} alt={nome} />

      <div style={{ padding: "15px" }}>
        <h3>{nome}</h3>
        <p>R$ {preco}</p>

        <button>Comprar</button>
      </div>
    </div>
  );
}
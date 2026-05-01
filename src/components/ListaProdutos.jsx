import React from "react";
import CardProduto from "./CardProduto";

export default function ListaProdutos() {
  const produtos = [
    { nome: "ITEM_01", imagem: "/img/archive1.jpeg", preco: 399 },
    { nome: "ITEM_02", imagem: "/img/archive2.jpeg", preco: 299 },
    { nome: "ITEM_03", imagem: "/img/archive3.jpeg", preco: 199 },
    { nome: "ITEM_04", imagem: "/img/archive4.jpeg", preco: 499 },
    { nome: "ITEM_05", imagem: "/img/archive5.jpeg", preco: 259 },
    { nome: "ITEM_06", imagem: "/img/archive6.jpeg", preco: 349 }
  ];

  return (
    <section className="produtos" id="produtos">
      <h2>ARCHIVE</h2>

      <div className="grid">
        {produtos.map((p, i) => (
          <CardProduto key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
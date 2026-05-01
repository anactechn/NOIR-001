import { useEffect, useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ListaProdutos from "./components/ListaProdutos";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";
import "./App.css";

import React from "react";
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  return (
    <>
      {loading && (
        <div className="loader">
          <h1>NOIR//001</h1>
        </div>
      )}

      <Header />
      <Banner />
      <ListaProdutos />
      <Sobre />
      <Footer />
    </>
  );
}
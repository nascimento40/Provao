import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from '../../services/api';

const Livros = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const carregarLivros = async () => {
      try {
        const response = await api.get("http://localhost:3001/biblioteca/livros");
        setLivros(response.data);
      } catch (error) {
        console.error("Erro ao carregar os livros:", error);
      }
    };

    carregarLivros();
  }, []);

  return (
    <div>
      <h2>Livros</h2>
      <div className="grid-container">
        {livros.map((livro) => (
          <div className="card" key={livro._id}>
            <h3>{livro.Titulo}</h3>
            <p>Tema: {livro.Tema}</p>
            <p>Ano de Publicação: {livro.AnoPublicacao}</p>
            <Link to={`/livros/${livro._id}`}>
              <button>Detalhes</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Livros;

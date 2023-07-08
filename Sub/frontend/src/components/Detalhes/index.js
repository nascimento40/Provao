import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from '../../services/api';

const Detalhes = () => {
  const { id } = useParams();
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    const carregarLivro = async () => {
      try {
        const response = await api.get(`/biblioteca/livros/${id}`);
        setLivro(response.data);
      } catch (error) {
        console.error("Erro ao carregar o livro:", error);
      }
    };

    carregarLivro();
  }, [id]);

  const alugarLivro = () => {
    if (livro.Alugado) {
      alert("Livro indisponível");
    } else {
      alert("Livro alugado");
    }
  };

  if (!livro) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h2>Detalhes do Livro</h2>
      <div>
        <p>Título: {livro.Titulo}</p>
        <p>Autor: {livro.Autor}</p>
        <p>Ano de Publicação: {livro.AnoPublicacao}</p>
        <p>Tema: {livro.Tema}</p>
        <button onClick={alugarLivro} disabled={livro.Alugado}>
          {livro.Alugado ? "Indisponível" : "Alugar"}
        </button>
      </div>
    </div>
  );
};

export default Detalhes;

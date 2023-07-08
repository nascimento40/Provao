import React, { useState } from "react";
import api from "../../services/api";

export default function Cadastro() {
  const [ISBN, setISBN] = useState("");
  const [Titulo, setTitulo] = useState("");
  const [Autor, setAutor] = useState("");
  const [AnoPublicacao, setAnoPublicacao] = useState("");
  const [Tema, setTema] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const livro = {
      ISBN: ISBN,
      Titulo: Titulo,
      Autor: Autor,
      AnoPublicacao: AnoPublicacao,
      Tema: Tema
    };

    api
      .post("/biblioteca/livros", livro)
      .then((response) => {
        console.log(response.data);
        alert(`O livro com ISBN ${response.data.ISBN} foi cadastrado com sucesso!`);
      })
      .catch((error) => {
        console.error(error);
        alert("Ocorreu um erro! Verifique o console para mais detalhes.");
      })
      .finally(() => {
        setISBN("");
        setTitulo("");
        setAutor("");
        setAnoPublicacao("");
        setTema("");
      });
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="form-custom">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                ISBN:
                <input
                  type="number"
                  className="form-control"
                  value={ISBN}
                  onChange={(e) => setISBN(e.target.value)}
                />
              </label>
            </div>
            <br />
            <div className="form-group">
              <label>
                Título:
                <input
                  type="text"
                  className="form-control"
                  value={Titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />
              </label>
            </div>
            <br />
            <div className="form-group">
              <label>
                Autor:
                <input
                  type="text"
                  className="form-control"
                  value={Autor}
                  onChange={(e) => setAutor(e.target.value)}
                />
              </label>
            </div>
            <br />
            <div className="form-group">
              <label>
                Ano de Publicação:
                <input
                  type="number"
                  className="form-control"
                  value={AnoPublicacao}
                  onChange={(e) => setAnoPublicacao(e.target.value)}
                />
              </label>
            </div>
            <br />
            <div className="form-group">
              <label>
                Tema:
                <input
                  type="text"
                  className="form-control"
                  value={Tema}
                  onChange={(e) => setTema(e.target.value)}
                />
              </label>
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


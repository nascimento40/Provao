const Livro = require('../models/bibliotecaModel');

class BibliotecaController {
  async cadastrarLivro(req, res) {
    const livro = req.body;
    const max = await Livro.findOne({}).sort({ ISBN: -1 });
    livro.ISBN = max === null ? 1 : max.ISBN + 1;

    try {
      const livroExistente = await Livro.findOne({ ISBN: livro.ISBN });
      if (livroExistente) {
        return res.status(400).json({ error: 'Livro já cadastrado!' });
      }

      const novoLivro = await Livro.create(livro);
      res.status(201).json(novoLivro);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao cadastrar o livro.' });
    }
  }

  async retornarTodosLivros(req, res) {
    try {
      const livros = await Livro.find();
      res.status(200).json(livros);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao retornar os livros.' });
    }
  }

  async retornarLivroPorISBN(req, res) {
    const ISBN = req.params.isbn;

    try {
      const livro = await Livro.findOne({ ISBN: ISBN });
      if (livro) {
        res.status(200).json(livro);
      } else {
        res.status(404).json({ error: 'Livro não encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao retornar o livro.' });
    }
  }

  async atualizarLivro(req, res) {
    const ISBN = req.params.isbn;
    const novoLivro = req.body;

    try {
      const livro = await Livro.findOneAndUpdate({ ISBN: ISBN }, novoLivro, { new: true });
      if (livro) {
        res.status(200).json(livro);
      } else {
        res.status(404).json({ error: 'Livro não encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar o livro.' });
    }
  }

  async deletarLivro(req, res) {
    const ISBN = req.params.isbn;

    try {
      const livro = await Livro.findOneAndDelete({ ISBN: ISBN });
      if (livro) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'Livro não encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar o livro.' });
    }
  }
}

module.exports = new BibliotecaController();


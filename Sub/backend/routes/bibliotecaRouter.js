const express = require('express');
const router = express.Router();
const bibliotecaController = require('../controllers/bibliotecaController');

// Rota para cadastrar um livro
router.post('/livros', bibliotecaController.cadastrarLivro);

// Rota para retornar todos os livros
router.get('/livros', bibliotecaController.retornarTodosLivros);

// Rota para retornar um livro por ISBN
router.get('/livros/:isbn', bibliotecaController.retornarLivroPorISBN);

// Rota para atualizar os campos de um livro
router.put('/livros/:isbn', bibliotecaController.atualizarLivro);

// Rota para deletar um livro
router.delete('/livros/:isbn', bibliotecaController.deletarLivro);

module.exports = router;

const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const livroSchema = new mongoose.Schema({
  ISBN: {
    type: Number,
    required: true,
    unique: true
  },
  Titulo: {
    type: String,
    required: true
  },
  Autor: {
    type: String,
    required: true
  },
  AnoPublicacao: {
    type: Number,
    required: true
  },
  Tema: {
    type: String,
    required: true
  },
  Alugado: {
    type: Boolean,
    default: false
  }
});

livroSchema.pre('save', async function (next) {
  // Lógica adicional antes de salvar o livro, se necessário
  next();
});

module.exports = mongoose.model('Livro', livroSchema);


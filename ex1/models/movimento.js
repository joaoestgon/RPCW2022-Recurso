var mongoose = require('mongoose')

var movimentoSchema = new mongoose.Schema({
  Numero : String,
  Tipo : String,
  Data : Date,
  Valor : Number,
  Entidade : String,
  Descricao : String
})

module.exports = mongoose.model('movimento', movimentoSchema)
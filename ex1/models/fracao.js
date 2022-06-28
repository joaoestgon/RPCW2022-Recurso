var mongoose = require('mongoose')


var fracaoSchema = new mongoose.Schema({
    Fracao : String,
    Permilagem : Number,
    Mensalidade : Number
  })

  module.exports = mongoose.model('fracao', fracaoSchema)
var mongoose = require('mongoose')


var pagamentoSchema = new mongoose.Schema({
    Fracao : String,
    Jan : Number,
    Fev : Number,
    Mar : Number,
    Abr : Number,
    Mai : Number,
    Jun : Number,
    Jul : Number,
    Set : Number,
    Out : Number,
    Nov : Number,
    Dez : Number

  })
  
  module.exports = mongoose.model('pagamento', pagamentoSchema)
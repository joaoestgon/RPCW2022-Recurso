const mongoose = require('mongoose')
var Pagamento = require('../models/pagamento')
var Fracao = require('../models/fracao')

module.exports.listar = () => {
  return Pagamento
    .find()
    .exec()
}

module.exports.listarPorId = (id) => {
    return Pagamento
      .find({Fracao : id})
      .exec()
}

const mongoose = require('mongoose')
var Movimento = require('../models/movimento')

module.exports.listar = () => {
  return Movimento
    .find()
    .exec()
}

module.exports.listarPorTipo = (qvalue) => {

    return Movimento
      .find({Tipo : qvalue})
      .exec()
}

module.exports.listarPorEntidade = (qvalue) => {

  return Movimento
    .find({Entidade : qvalue}, {Entidade : 1, Valor : 1})
    .exec()
}

module.exports.insert = movimento => {
  var newMovimento = new Movimento(movimento)
  return newMovimento.save()
}
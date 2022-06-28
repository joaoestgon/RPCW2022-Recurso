var express = require('express');
var router = express.Router();

var Movimento = require('../controllers/movimento')
var Pagamento = require('../controllers/pagamento')
var Fracao = require('../controllers/fracao')

router.get('/movimentos', function(req, res, next) {
  if(req.query.groupBy == "Receita" || req.query.groupBy == "Despesa") {
    Movimento.listarPorTipo(req.query.groupBy)
    .then( dados => {
      res.jsonp(dados)
    }).catch( error => {
      res.status(500).jsonp({error: error})
    })
  } else if (req.query.groupBy) {
    Movimento.listarPorEntidade(req.query.groupBy)
    .then( dados => {
      sum = 0
      dados.forEach(entidade => {
       sum += (entidade.valor)
      })
  
      res.jsonp("Total: " + sum)
    }).catch( error => {
      res.status(500).jsonp({error: error})
    })
  }
  else {
    Movimento.listar().then( dados => {
      res.jsonp(dados)
    }).catch( error => {
      res.status(500).jsonp({error: error})
    })
  }
});

router.get('/pagamentos', function(req, res, next) {
  if(req.query.groupBy == "Receita" || req.query.groupBy == "Despesa") {
    Movimento.listarPorTipo(req.query.groupBy)
    .then( dados => {
      res.jsonp(dados)
    }).catch( error => {
      res.status(500).jsonp({error: error})
    })
  } else if (req.query.groupBy) {
    Movimento.listarPorEntidade(req.query.groupBy)
    .then( dados => {
      sum = 0
      dados.forEach(entidade => {
       sum += (entidade.valor)
      })
  
      res.jsonp("Total: " + sum)
    }).catch( error => {
      res.status(500).jsonp({error: error})
    })
  }
  else {
    Pagamento.listar().then( dados => {
      res.jsonp(dados)
    }).catch( error => {
      res.status(500).jsonp({error: error})
    })
  }
});

router.get('/pagamentos/:id', function(req, res, next) {
  
  Pagamento.listarPorId(req.params.id).then( dados => {
    res.jsonp(dados)
  }).catch( error => {
    res.status(500).jsonp({error: error})
  })
});

module.exports = router;

router.post('/movimentos', (req, res) => {
  var movimento = {
    Numero: req.body.numero,
    Tipo: req.body.tipo,
    Data: req.body.data,
    Valor: req.body.valor,
    Entidade: req.body.descricao
  }

  Movimento.insert(movimento)
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.render('error', {error: e}))
});

router.post('/movimentos', (req, res) => {
  var movimento = {
    Numero: req.body.numero,
    Tipo: req.body.tipo,
    Data: req.body.data,
    Valor: req.body.valor,
    Entidade: req.body.descricao
  }

  Movimento.insert(movimento)
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.render('error', {error: e}))
});

router.post('/pagamentos', (req, res) => {
  var pagamento = {
    Fracao: req.body.fracao,
    Jan: req.body.jan,
    Fev: req.body.fev,
    Mar: req.body.mar,
    Abr: req.body.abr,
    Mai: req.body.mai,
    Jun: req.body.jun,
    Jul: req.body.jul,
    Ago: req.body.ago,
    Set: req.body.set,
    Out: req.body.out,
    Nov: req.body.nov,
    Dez: req.body.dez
  }

  Pagamento.insert(pagamento)
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.render('error', {error: e}))
});

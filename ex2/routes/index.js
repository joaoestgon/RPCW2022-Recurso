var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/movimentos', function(req, res, next) {
  axios.get("http://localhost:3000/movimentos")
    .then(response => {
      var lista = response.data
      res.status(200).render('movimentos', { lista: lista});  
    })
    .catch(function(erro){
      res.status(501).jsonp({erro: erro});
    })
});

router.get('/pagamentos', function(req, res, next) {
  axios.get("http://localhost:3000/pagamentos")
    .then(response => {
      var lista = response.data
      res.status(200).render('pagamentos', { lista: lista});  
    })
    .catch(function(erro){
      res.status(501).jsonp({erro: erro});
    })
});

module.exports = router;

var express = require('express')
var app = express();

app.listen(3000, function(){
  console.log('Servidor rodando na porta 3000')
});

app.get('/teste', function(req, res){
  console.log('Recebida requisicao de teste.')
  res.send('Requisicao de teste rodando com sucesso')
});

const express = require('express');
const app = express();
const calculadora = require('./calculadora');

app.get('/' ,(req, res) => {
   let peso = req.query.peso;
   let altura = req.query.altura;

   if(calculadora.validaParametro(req.query.peso)&&calculadora.validaParametro(req.query.altura)){

   let imc = calculadora.calculaImc(peso,altura);
   let status = calculadora.retornaStatus(imc);
   let json = {imc:imc,status:status};
   
   res.json(json);

   }
   else{
    res.status(400).json({'Erro':'Peso ou altura inválidos.'});
   }
   
});

app.listen(8080, () => {
    let data = new Date();

    console.log('Servidor node inciado em:' + data);
})
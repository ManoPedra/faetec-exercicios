
import express from "express";

const Express = express;

export const ServrTest = Express();

ServrTest.get('/', (req, res) =>{

    console.log('fui requisitado');

    return res.send('Resposta minha');
    

});

ServrTest.listen( 3344,()=> console.log('Eu to ligado e rodando na porta 3344 cara'));
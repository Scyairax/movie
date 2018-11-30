var express = require('express');//richiamo del modulo express

var router = express.Router()//modulo express e funzione di router di express

var controller = require('./controller');


//lista di tutti i film
router.get('/', controller.getAll);

router.get('/:id([a-z0-9]{24})', controller.getOne);

router.post('/', controller.creaAttore);


module.exports = router;//senza questo export nel file  routers non parte app.use

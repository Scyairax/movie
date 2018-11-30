var express = require('express');//richiamo del modulo express

var router = express.Router()//modulo express e funzione di router di express

var controller = require('./controller');


//lista di tutti i film
router.get('/', controller.getAll);


module.exports = router;//senza questo export nel file  routers non parte app.use

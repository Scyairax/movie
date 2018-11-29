var express = require('express');//richiamo del modulo express

var router = express.Router()//modulo express e funzione di router di express

var controller = require('./controller');


//lista di tutti i film
router.get('/', controller.getAll);
//un solo film per id
router.get('/:id([a-z0-9]{24})', controller.getOne);//* qualsiasi {1,4} da 1 a 4
//router.get('/:crea', controller.createFilm); è sono una prova per differenziare le rotte nel caso ci siano problemi, ricoradti la lezuine e cosa ha detto paolo
//creazione di un film
router.post('/', controller.createFilm);//se scrive ,
//modifica di un fil
router.put('/:id([a-z0-9]{24})', controller.modificaFilm);
//eliminazione di un film
router.put('/voto/:id([a-z0-9]{24})', controller.votaFilm);
//voto di un film
//router.delete('/:id([a-z0-9]{24})', controller.eliminaFilm) cosi funzione solo con un id
router.delete('/', controller.eliminaFilm)//cosi funzione solo per tutto

module.exports = router;//senza questo export nel file  routers non parte app.use

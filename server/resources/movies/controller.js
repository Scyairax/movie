module.exports = (function () {
  
   var movie = require("./movie")

    var modificaFilm = (req, res) => {
        var idfilm = req.params.id
        res.json("hai cambiato il nome " + idfilm)
    }


    var getOne = (req, res) => {
        var id = req.params.id;//id è il parametro passato movie nella rotta corretta
        res.json("film con id: " + id)                    //rechiesta del parametro id nel url
    }

    var getAll = (req, res) => {
        res.json("lista di tutti i film");
    }

   var votaFilm = (req, res) => {
       var idfilm = req.params.idfilm;
       var voto = req.body.voto;
    res.json("il voto dato è" + voto);
    }
    
    var createFilm = (req, res) => {
        var creafilm = new movie(req.body);
        console.log(creafilm);
        creafilm.save().then(data => res.json(data))
        .catch(err => res.json(err))
        //res.json("rotta per creare un film" + creafilm);
    }

    var eliminaFilm = (req, res) => {
       var idfilm = req.params.id;
       req.json("hai cancellato il film con id " + idfilm)
    }
    return {
        
        getAll: getAll,
        getOne: getOne,
        createFilm: createFilm,
        votaFilm: votaFilm,
        modificaFilm: modificaFilm,
      eliminaFilm: eliminaFilm
    }


})()
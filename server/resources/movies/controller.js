module.exports = (function () {
  
   var movie = require("./movie")

    var modificaFilm = (req, res) => {
        var idfilm = req.params.id
        res.json("hai cambiato il nome " + idfilm)
    }

    var getOne = (req, res) => {
        var onefilm = movie.findById((req.params.id),"anno")//cosi mi ritorna per forza il titolo, o l'anno
        .exec()
        .then(function (movie) {
            console.log(movie);
            res.json(movie);
        })
        .catch(function (err) {
            throw err;
    });                   //rechiesta del parametro id nel url
    }

    var getAll = (req, res) => {
        var query = movie.find()//http://localhost:3000/movies/?anno=2017 questa è la query string
        if (req.query.anno) {
            query.where('anno').equals(req.query.anno)
        }
        query
            .exec()
            .then(function (movie) {
                console.log(movie);
                res.json(movie);
            })
            .catch(function (err) {
                res.json(err)
                throw err;
            });


    }



  //  var getAll = (req, res) => {
   //     var query = movie.find()
   //     .exec()
   //      .then(function (movie) {
    //         console.log(movie);
    //         res.json(movie);
   // })
  //  .catch(function (err) {
      //  throw err;
//});
 //}   

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
      // var idfilm = req.params.id;
        //req.json("hai cancellato il film con id " + id)
        movie.findById(req.params.id)
        .exec()
        .then(function (movie) {
            return movie.remove();
        })
        .then(function () {
            console.log('il film è stato rimosso');
        })
        .catch(function (err) {
            throw err;
    });




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
module.exports = (function () {
  
    var movie = require("./movie")
    var attore = require("../attori/Attore")

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
        if (req.query.votomin) {
            query.where('voto').gt(req.query.votomin)//http://localhost:3000/movies/?votomin=3&?votomax=9
        }
        if (req.query.votomax) {
            query.where('voto').gt(req.query.votomax)
        }
        if (req.query.genere) {
            var generi = req.query.genere.split(',')
            query.where('genere').in(generi)
        }
        query
           // .populate("attori")//questo attori è la colonnna degli attori dentro il nostro document
                                 //oppure se può personalizzare il populate- guarda le slide
                 .populate({
                  path: 'attori',//colonna della tabella film
                   match: { eta: { $gte: 40 }},//condizione del populate
                   select: ['nome','cognome','eta','foto'],//dati che desidero
                })  
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
       var id = req.params.id;
       var voto = req.body.voto;
      //chiedere ad ivan il voto
       res.json("il voto dato è" + voto);  
    }
    
    var createFilm = (req, res) => {
        var creafilm = new movie(req.body);
        console.log(creafilm);
        console.log(req.body);
         creafilm.save().then(data => res.json(data))
         .catch(err => res.json(err))
     //   res.json("hai creato il film  " + creafilm);
    }

  //  var eliminaFilm = (req, res) => {
      // var idfilm = req.params.id; non le usare
        //req.json("hai cancellato il film con id " + id) non le usare
   //     movie.findById(req.params.id)
   //     .exec()
    //    .then(function (movie) {
   //         return movie.remove();
   //     })
   //     .then(function () {
   //         console.log('il film è stato rimosso');
    //    })
    //    .catch(function (err) {
   //         throw err;
   // });
  //  }

    var eliminaFilm = (req, res) => {
        movie.findOne(req.params.titolo)
        .exec()
        .then(function (movie) {
          return movie.remove();
            })
         .then(function (data) {//questo then restituisce con quello eliminato poiche la concatenazione dei then mantiene il costesto
        console.log('hai rimosso il film'+ data);//http://localhost:3000/movies/?titolo=spiderman2 verdo delete
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
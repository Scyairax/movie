module.exports = (function () {
  
   
    var Attore = require("./Attore")

    var eliminaAttore = (req, res) => {
        //var attoredata = req.body;
        var id = req.params.id;
        //console.log(res.json(id))
        Attore.findByIdAndDelete(id)
        .then(data => res.json(data)
    ).catch(err => res.json(err)) 
    }

    // var eliminaAttore = (req, res) => {
    //     Attore.findById(req.params.id)
    //     .exec()
    //     .then(function (attore) {
    //       return attore.remove();
    //         })
    //      .then(function (data) {//questo then restituisce con quello eliminato poiche la concatenazione dei then mantiene il costesto
    //     console.log('hai rimosso il film'+ data);//http://localhost:3000/movies/?titolo=spiderman2 verdo delete
    //      })
    //      .catch(function (err) {
    //      throw err;
    //     });
    //     }

    var modificaAttore = (req, res) => {
        var attoredata = req.body;
        var id = req.params.id;

        Attore.findByIdAndUpdate(id, attoredata)
        .then(data => 
        res.json(data)
    ).catch(err => res.json(err)) 
    }

    var creaAttore = (req, res) => {
        var creaattore = new Attore(req.body);
        console.log(creaattore);
        console.log(req.body);
         creaattore.save().then(data => res.json(data))
         .catch(err => res.json(err))
     //   res.json("hai creato il film  " + creafilm);
    }


    var getOne = (req, res) => {
        var onefilm = Attore.findById((req.params.id),"nome")//cosi mi ritorna per forza il titolo, o l'anno
        .exec()
        .then(function (dato_momentaneo) {
            console.log(dato_momentaneo);
            res.json(dato_momentaneo);
        })
        .catch(function (err) {
            throw err;
    });                   //rechiesta del parametro id nel url
    }



    
   var getAll = (req, res) => {
       var query = Attore.find()//questo attore nonn è la collection ma la variabile di soprakk
       .exec()
        .then(function (figa) {
            console.log(figa);
            res.json(figa);
   })
   .catch(function (err) {
       throw err;
});
    }   
    
    return {
        eliminaAttore:eliminaAttore,
        modificaAttore:modificaAttore,
        creaAttore:creaAttore,
        getAll: getAll,
        getOne: getOne
       
    }


})()
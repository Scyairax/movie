module.exports = (function () {
  
   
    var Attore = require("./Attore")


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
        creaAttore:creaAttore,
        getAll: getAll,
        getOne: getOne
       
    }


})()
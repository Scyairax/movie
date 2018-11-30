module.exports = (function () {
  
   
    var Attore = require("./Attore")


    
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
        
        getAll: getAll
       
    }


})()
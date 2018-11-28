module.exports = (function () {
    
    var getOne = (req, res) => {
        var id = req.params.id;
        res.json("film con id: " + id)                    //rechiesta del parametro id nel url
    }


    var getAll = (req, res) => {
        res.json("lista di tutti i film");
    }
    
    return {
        getAll: getAll,
        getOne: getOne
    }


    





})()
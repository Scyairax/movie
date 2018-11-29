var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/themoviedb', 
    { useNewUrlParser: true,
        useCreateIndex: true }, 
    err => {
        if(err) console.log(err);
        else console.log("ciaoooo sono il tuo database mongodb, io sono più bello e simpatico !! :-P");
    });

mongoose.Promise = global.Promise;
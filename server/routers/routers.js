module.exports = function (app, express){
    
  var bodyParser = require('body-parser')
    app.use(bodyParser.json())
  //  app.get('/', (req, res) => {
  //      res.send('ciao mondo');
 //   }) 
    //questo è referenziato con movies
    app.use('/movies',require('../resources/movies/movies'));
 //   app.use('/attori', require('../resources/attori/attori'));
}
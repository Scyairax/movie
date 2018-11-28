module.exports = function (app, express){
    

  //  app.get('/', (req, res) => {
  //      res.send('ciao mondo');
 //   })
    
    //questo è referenziato con movies
    app.use('/movies',require('../resources/movies/movies'));

}
var mongoose = require('mongoose');
var attoreSchema = new mongoose.Schema({
    nome: {
       type: String,
      // default: "nome film mancante",
       required: true,
      // select: true,//se viene selezionato durante la query, se sta scritto qui true torna il titolo per forza
      // validate: () => this.name != "jocker", se il nome è diverso da jocker non lo fa inserire
        index: true,//crea unnindice sul database ricordati che va il useCreateIndex: true, nel controller
       lowercase: true,//trasforma il lower case
       uppercase: false,//sta su false quindi non va questo
       trim: true//uniforma il testo se scritto un po alla cazzo di cane
    },
    cognome: {
        type: String,
       // default: "nome film mancante",
        required: true,
       // select: true,//se viene selezionato durante la query, se sta scritto qui true torna il titolo per forza
       // validate: () => this.name != "jocker", se il nome è diverso da jocker non lo fa inserire
         index: true,//crea unnindice sul database ricordati che va il useCreateIndex: true, nel controller
        lowercase: true,//trasforma il lower case
        uppercase: false,//sta su false quindi non va questo
        trim: true//uniforma il testo se scritto un po alla cazzo di cane
    },
    eta: {
        type:Number
    },
    foto: {
        type: String,
        default: "https://via.placeholder.com/150 "//default : /percorso del file nel filesystemn
    }
    

    
})

module.exports = mongoose.model("Attore",attoreSchema,"attori")//attori è il nome della collection e se non è specificato crea il plurale in inglese dentro al db
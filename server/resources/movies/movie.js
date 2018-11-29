var mongoose = require('mongoose');
var filmSchema = new mongoose.Schema({
    titolo: {
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
    anno: {
       type: Number,
       max: [3000, 'Troppo vecchio per fare l\'eroe'],
       min: [1900, 'Non hai abbastanza esperienza']
    },
    voto: {
        type: Number,
        default: 0,
        max: 10,
        min: 0
    },
    mvoto: {
        type: Number,
        default: 0,
    },
    genere: [{
        type: String,
        enum: ["horror","drammatico","comico","thriller","commedia"]
    }],
    data: {
        type: Date,
        
    }
   





})

filmSchema.pre('save', function(next) {
    this.data = Date.now()
    console.log(this);
    next();
})

module.exports = mongoose.model("movie",filmSchema)
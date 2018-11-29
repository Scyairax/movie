const express = require('express');

const app = express();
const PORT = 3000 || process.env.PORT;

require('./routers/routers.js')(app, express);
require('../server/config/db.js');

app.listen(PORT,  () => {
    console.log("http://localhost:" + PORT);
    console.log("ciao sono il tuo host, sono in piedi!!! ;-) credici !!!")
});

//questa configurazione permette di lanciare nodemon solo tramite npm run dev "dev": "nodemon server/index.js", 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const indexRouter = require('./routes/index.routes');

const PORT = 5000 || process.env.PORT;
const publicFolder = path.join(__dirname,'./public');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(publicFolder));
app.use(indexRouter); // Escucha las peticiones 

app.listen(PORT, () => console.log(`CGTIE - Corriendo en: ${PORT}!`))
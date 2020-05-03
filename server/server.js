// index.js
const express = require('express');
//const bodyParser = require('body-parser');
const clientRoute = require("./routes/ClientRoute");

// inicializar app express
const app = express();

app.use("/client", clientRoute)

let porta = 8000;
app.listen(porta, () => {
    console.log('Servidor em execução no porta: ' + porta);
});

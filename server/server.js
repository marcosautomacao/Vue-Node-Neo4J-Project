const express = require('express');
const bodyParser = require('body-parser');
const clientRoute = require("./routes/ClientRoute");

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, Accept, content-type");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });
app.use(bodyParser());
app.use("/client", clientRoute)

let porta = 8000;
app.listen(porta, () => {
    console.log('Servidor em execução no porta: ' + porta);
});

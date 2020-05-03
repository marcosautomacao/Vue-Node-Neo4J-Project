const client = require('../models/ClientModel');
const getClientsService = require("../services/GetClientsService");

exports.getClient = function (req, res) {
    getClientsService.run();
    res.send('Olá! Teste ao Controller');
};

exports.postClient = function (req, res) {
    res.send('Olá! Teste ao Controller');
};
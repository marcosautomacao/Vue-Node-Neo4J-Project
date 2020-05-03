const express = require("express");
const router = express.Router();

const clientController = require("../controllers/ClientController");

router.get('/', (req, res) => clientController.getAllClients(req, res));
router.get('/:nome', (req, res) => clientController.getClientByNome(req, res));
router.post('/', (req, res) => clientController.postClient(req, res));
router.delete('/:nome', (req, res) => clientController.deleteClient(req, res));
router.put('/', (req, res) => clientController.updateClient(req, res));

module.exports = router;
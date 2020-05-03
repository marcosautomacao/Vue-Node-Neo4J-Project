const express = require("express");
const router = express.Router();

// Colocar controller que ainda não foi criado
const clientController = require("../controllers/ClientController");

// teste simples
router.get("", clientController.getClient);
router.post("", clientController.postClient);
// router.delete("", clientController.deleteClient);
// router.put("", clientController.putClient);
module.exports = router;
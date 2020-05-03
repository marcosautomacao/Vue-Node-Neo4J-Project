const getClientsService = require("../services/GetClientsService");
const getClientByNomeService = require("../services/GetClientByNomeService");
const postClientService = require("../services/PostClientService");
const putClientService = require("../services/PutClientService");
const deleteClientService = require("../services/DeleteClientService");


class ClientController {
    getAllClients = async (req, res) => {

        const clients = await getClientsService.run();

        res.json({ response: clients });
    };

    getClientByNome = async (req, res) => {

        const client = await getClientByNomeService.run(req.params.nome)

        res.json({ response: client });
    };

    postClient = async (req, res) => {

        await postClientService.run(req.body)

        res.status(201).send();

    };

    deleteClient = async (req, res) => {

        await deleteClientService.run(req.params.nome);

        res.status(206).send();
    };

    updateClient = async (req, res) => {

        await putClientService.run(req.body);

        res.status(206).send();
    };
}
module.exports = new ClientController();
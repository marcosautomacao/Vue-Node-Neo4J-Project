const Neo4jConfig = require("../configs/Neo4jConfig")
const ClientModel = require("../models/CLientModel")

class PutClientService {
    async run(clientToPost) {

        const conn = Neo4jConfig.OpenConnection();

        const session = conn.session();

        const client = new ClientModel(clientToPost);

        await session.run(
            `CREATE (n:Client { Nome: $nome })
            SET n.Idade = $idade,
                n.Sexo = $sexo,
                n.Data_Atualizacao = $dt_atualizacao`,
            { nome: client.nome, idade: client.idade, sexo: client.sexo, dt_atualizacao: (new Date()).toUTCString() }
            );

        session.close();

        console.log("Client atualizado");

        conn.close();
    }
}
module.exports = new PutClientService()

const Neo4jConfig = require("../configs/Neo4jConfig")
const ClientModel = require("../models/CLientModel")

class PostClientService {
    async run(clientToPost) {

        const conn = Neo4jConfig.OpenConnection();
        
        const session = conn.session();

        const client = new ClientModel(clientToPost);

        await session.run(
            'CREATE (a:Client {Nome: $name, Idade: $idade, Sexo: $sexo, Data_Cadastro: $dt_cadastro, Data_Atualizacao: $dt_atualizacao}) RETURN a',
            { name: client.nome, idade: client.idade, sexo: client.sexo, dt_cadastro: client.dt_cadastro, dt_atualizacao: client.dt_atualizacao }
        );

        session.close();

        console.log("Client cadastrado");

        conn.close();
    }
}
module.exports = new PostClientService()

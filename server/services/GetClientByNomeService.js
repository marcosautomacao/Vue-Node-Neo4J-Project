const Neo4jConfig = require("../configs/Neo4jConfig")

class GetClientByNomeService {
    async run(nome) {

        const conn = Neo4jConfig.OpenConnection();

        const session = conn.session();

        const result = await session.run(
            'MATCH (n:Client { Nome: $nome }) RETURN n LIMIT 25',
            { nome }
        );

        session.close();

        const client = result.records[0].get(0).properties;
        console.log("Clientes retornados");

        conn.close();

        return client;
    }
}
module.exports = new GetClientByNomeService()

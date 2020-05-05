const Neo4jConfig = require("../configs/Neo4jConfig")

class GetClientsService {
    async run() {

        const conn = await Neo4jConfig.OpenConnection()

        const session = conn.session();

        const result = await session.run(
            'MATCH (n:Client) RETURN n LIMIT 25'
        );

        session.close();

        const clientList = result.records.map(
            r => r.get(0).properties
        );
        console.log("Clientes retornados");

        conn.close();

        return clientList;
    }
}
module.exports = new GetClientsService()

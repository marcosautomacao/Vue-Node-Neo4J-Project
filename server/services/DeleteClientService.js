const Neo4jConfig = require("../configs/Neo4jConfig")

class DeleteClientService {
    async run(nome) {

        const conn = Neo4jConfig.OpenConnection();

        const session = conn.session();

        await session.run(
            'MATCH (n:Client { Nome: $nome }) DELETE n',
            { nome }
        );

        session.close();

        console.log("Cliente removido");

        conn.close();
    }
}
module.exports = new DeleteClientService()

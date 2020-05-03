const Neo4j = require("../configs/Neo4jConfig")

class GetClientsService {
    run() {

        const session = Neo4j.neo4jdriver().session();

        const personName = 'Jhonathan Soares';
        const resultPromise = session.run(
            'CREATE (a:Machine {name: $name}) RETURN a',
            { name: personName }
        );


        resultPromise.then(result => {
            session.close();

            const singleRecord = result.records[0];
            const node = singleRecord.get(0);

            console.log(node.properties.name);
        }).catch(result => {
            console.log(result)
            session.close();
        });
    }
}
module.exports = new GetClientsService()

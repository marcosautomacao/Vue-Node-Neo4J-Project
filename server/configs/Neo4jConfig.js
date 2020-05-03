const neo4j = require('neo4j-driver')
class Neo4jConfig {
    OpenConnection = () => {
        return neo4j.driver(
            'neo4j://localhost:7687',
            neo4j.auth.basic('neo4j', '1234'),
            {
                maxTransactionRetryTime: 30000
            })
    };
}
module.exports = new Neo4jConfig();
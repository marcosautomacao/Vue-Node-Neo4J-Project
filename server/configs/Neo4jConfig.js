
const neo4j = require('neo4j-driver')

exports.neo4jdriver = () => {
    return neo4j.driver(
    'neo4j://localhost:7687',
    neo4j.auth.basic('neo4j', '1234'),
    {
        maxTransactionRetryTime: 30000
    })
};
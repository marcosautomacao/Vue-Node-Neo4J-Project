const neo4j = require('neo4j-driver')
const fs = require('fs')
class Neo4jConfig {
    GetDbParams() {
        return new Promise((resolve, reject) => {
            fs.readFile("./server/neo4jconfig.txt", 'utf8', (err, paramsDb) => {
                if (err) reject(err);
                resolve(paramsDb.split(";"))
            });
        });
    }

    async OpenConnection() {
        const paramsDb = await this.GetDbParams()

        return neo4j.driver(
            paramsDb[0],
            neo4j.auth.basic(paramsDb[1], paramsDb[2]),
            {
                maxTransactionRetryTime: 30000
            })
    };
}
module.exports = new Neo4jConfig();
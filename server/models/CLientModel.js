class ClientModel {
    constructor(c) {
        this.nome = c.nome
        this.idade = c.idade
        this.sexo = c.sexo
        this.dt_cadastro = (new Date()).toUTCString();
        this.dt_atualizacao = (new Date()).toUTCString();
    };
}
module.exports = ClientModel;
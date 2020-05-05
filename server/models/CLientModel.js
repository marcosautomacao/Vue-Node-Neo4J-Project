class ClientModel {
    constructor(c) {
        this.nome = c.Nome
        this.idade = c.Idade
        this.sexo = c.Sexo
        this.dt_cadastro = (new Date()).toUTCString();
        this.dt_atualizacao = (new Date()).toUTCString();
    };
}
module.exports = ClientModel;
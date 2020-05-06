<template>
  <div>
    <div class="row">
      <div class="col-4 content">
        <img src="../public/logo.png" class="mx-auto d-block" />
      </div>
      <div class="col-14">
        <div id="slogan" class="text-center">
          <h1>QualiCorp Client Control</h1>
          <br />
          <h6 class="text-secondary">Controle de clientes da QualiCorp Vue.js, Neo4J e Node</h6>
        </div>
      </div>
    </div>

    <div id="main">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <h5>Adicionar ou editar Cliente</h5>
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <div class="form-todo form-group">
                  <p>
                    <input
                      placeholder="Nome"
                      type="text"
                      name="Nome"
                      class="form-control"
                      v-model="Cliente.Nome"
                    />
                  </p>
                  <p>
                    <input
                      placeholder="Idade"
                      type="text"
                      name="Idade"
                      class="form-control"
                      v-model="Cliente.Idade"
                    />
                  </p>
                  <p>
                    <input
                      placeholder="Sexo"
                      type="text"
                      name="Sexo"
                      class="form-control"
                      v-model="Cliente.Sexo"
                    />
                  </p>
                  <div class="row">
                    <div class="col text-right">
                      <button v-on:click="AddClient" type="submit" class="btn btn-primary">
                        <span class="fa fa fa-plus"></span>
                      </button>
                    </div>
                    <div class="col">
                      <button v-on:click="UpdateClient" type="submit" class="btn btn-primary">
                        <span class="fa fa fa-pencil-square-o"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-8">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Idade</th>
                  <th scope="col">Sexo</th>
                  <th scope="col">Data_Criacao</th>
                  <th scope="col">Data_Atualizacao</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(cliente, index) in Clientes" v-bind:key="cliente.Nome">
                  <th scope="row">{{++index}}</th>
                  <th scope="col">{{cliente.Nome}}</th>
                  <th scope="col">{{cliente.Idade}}</th>
                  <th scope="col">{{cliente.Sexo}}</th>
                  <th scope="col">{{cliente.Data_Cadastro}}</th>
                  <th scope="col">{{cliente.Data_Atualizacao}}</th>
                  <th scope="col">
                    <button class="btn btn-info" v-on:click="deleteClient(index)">
                      <span class="fa fa-trash"></span>
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import api from "../src/http_clients/client";

export default {
  name: "app",
  data: function() {
    return {
      Clientes: [],
      Cliente: {}
    };
  },
  async created() {
    this.getClients();
  },
  methods: {
    async getClients() {
      this.Clientes = (await api.getClients()).response;
    },
    async getClientsByNome(nome) {
      this.Clientes = (await api.getClients(nome)).response;
    },
    async AddClient() {
      await api.createClient(this.Cliente);
      await this.getClients()
      this.Client = {};
    },
    async deleteClient(index) {
      await api.deleteClient(this.Clientes[index].Nome);
      await this.getClients()
    },
    async UpdateClient() {
      await api.getClients(this.Cliente);
      await this.getClients()
      this.Cliente = {}
    }
  }
};
</script>

<style>
#slogan {
  margin-top: 30px;
  margin-bottom: 30px;
}
#main {
  background-color: #f1f1f1;
  padding-top: 30px;
  padding-bottom: 30px;
}
.content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
</style>

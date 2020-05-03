<template>
  <div>
    <div id="slogan" class="text-center">
      <h1>QualiCorp Client Control</h1>
      <br />
      <h6 class="text-secondary">Controle de clientes da QualiCorp Vue.js, GraphQL e Node</h6>
    </div>
    <div id="main">
      <div class="container">
        <h5>Adicionar Cliente</h5>
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <div class="row">
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item">Nome</li>
                  <li class="list-group-item">Idade</li>
                  <li class="list-group-item">Sexo</li>
                </ul>
                <br />
                <button class="btn btn-info" v-bind:href="asd" target="_blank">Inserir</button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Idade</th>
              <th scope="col">Sexo</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cliente in Clientes" v-bind:key="cliente.Nome">
              <th scope="row">1</th>
              <th scope="col">{{cliente.Nome}}</th>
              <th scope="col">{{cliente.Idade}}</th>
              <th scope="col">{{cliente.Sexo}}</th>
              <th scope="col">
                <button class="btn btn-info" v-bind:href="123" target="_blank">
                  <span class="fa fa-trash"></span>
                </button>
              </th>
              <th scope="col">
                <button class="btn btn-info" v-bind:href="123" target="_blank">
                  <span class="fa fa fa-pencil-square-o"></span>
                </button>
              </th>
            </tr>
          </tbody>
        </table>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

export default {
  name: "app",
  data: function() {
    return {
      Clientes: [
        {
          Nome: "Joao",
          Idade: 17,
          Sexo: "M"
        },
        {
          Nome: "Marcos",
          Idade: 23,
          Sexo: "M"
        }
      ]
    };
  },
  methods: {
    addClient() {},
    deleteClient() {}
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
</style>

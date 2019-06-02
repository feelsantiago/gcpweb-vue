<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Items</h3>
        </div>
        <div class="col text-right">
          <base-button type="primary" size="sm" @click="$emit('pesquisar-click')">Pesquisar</base-button>
          <base-button type="secondary" size="sm" @click="$emit('adicionar-click')">Adicionar</base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light" :data="tableData">
        <template slot="columns">
          <th>Titulo</th>
          <th>Tipo</th>
          <th>Estado</th>
          <th>Preço</th>
          <th>Emprestado</th>
          <th>Quantidade</th>
          <th></th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">{{row.titulo}}</th>
          <td>{{row.tipo}}</td>
          <td>{{row.estado}}</td>
          <td>{{ '$' + row.preco }}</td>
          <td>{{ row.emprestado }}</td>
          <td>{{ row.quantidade }}</td>
          <td>
            <base-button type="primary" size="sm">Editar</base-button>
            <base-button v-if="!row.emprestado" type="secondary" size="sm">Emprestar</base-button>
            <base-button v-else type="success" size="sm">Devolver</base-button>
          </td>
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "items-table",
  data() {
    return {
      total: 0,
      tableData: [
        {
          titulo: "HQ 1",
          tipo: "HQ",
          disponibilidade: "25/02/2020",
          preco: "500",
          emprestado: false,
          quantidade: 2
        },
        {
          titulo: "HQ 2",
          tipo: "HQ",
          disponibilidade: "25/02/2020",
          preco: "500",
          emprestado: true,
          quantidade: 2
        }
      ]
    };
  },
  methods: {}
};
</script>
<style>
</style>

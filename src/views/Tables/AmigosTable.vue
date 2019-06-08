<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Amigos</h3>
        </div>
        <div class="col text-right">
          <base-button type="secondary" size="sm" @click="$emit('adicionar-click')">Adicionar</base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light" :data="data">
        <template slot="columns">
          <th>Nome</th>
          <th>Parentesco</th>
          <th>Telefone</th>
          <th>Endereço</th>
          <th></th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">{{row.nome}}</th>
          <td>{{row.parentesco}}</td>
          <td>{{row.telefone}}</td>
          <td>{{ row.endereco }}</td>
          <td>
            <base-button type="primary" size="sm">Editar</base-button>
            <base-button type="danger" size="sm">Excluir</base-button>
          </td>
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "amigos-table",
  props: {
    data: {
      type: Array,
      default: () => [],
      description: "Table data"
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
</style>

<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Sagas</h3>
        </div>
        <div class="col text-right">
          <base-button type="secondary" size="sm" @click="$emit('adicionar-click')">Adicionar</base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light" :data="data">
        <template slot="columns">
          <th>Titulo</th>
          <th>Items</th>
          <th>Faltam</th>
          <th></th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">{{row.titulo}}</th>
          <td>{{row.items.length}}</td>
          <td>{{row.faltam}}</td>
          <td>
            <base-button type="primary" size="sm" @click="handleEditar(row.id)">Editar</base-button>
          </td>
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "sagas-table",
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
  methods: {
    handleEditar(id) {
      this.$router.push({ path: "/sagas/create/" + id });
    }
  }
};
</script>
<style>
</style>

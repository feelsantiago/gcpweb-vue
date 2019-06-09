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
      <base-table thead-classes="thead-light" :data="data">
        <template slot="columns">
          <th>Titulo</th>
          <th>Tipo</th>
          <th>Estado</th>
          <th>Preço</th>
          <th>Emprestado</th>
          <th>Quantidade</th>
          <th></th>
        </template>

        <template slot-scope="{row, index}">
          <th scope="row">{{row.titulo}}</th>
          <td>{{row.tipo}}</td>
          <td>{{row.estado}}</td>
          <td>{{ '$' + row.preco }}</td>
          <td>{{ row.emprestado }}</td>
          <td>{{ row.quantidade }}</td>
          <td>
            <base-button type="primary" size="sm">Editar</base-button>
            <base-button
              :type="row.emprestado ? 'success' : 'secondary'"
              size="sm"
              @click="handleEmprestar(row.emprestado, row.id, index)"
            >{{ row.emprestado ? 'Devolver' : 'Emprestar' }}</base-button>
          </td>
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
import LoaderService from "../../services/LoaderService";
import EmprestimoService from "../../services/EmprestimoService";

export default {
  name: "items-table",
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
    async handleEmprestar(emprestado, id, index) {
      if (!emprestado) return this.$router.push("/items/emprestimo/" + id);

      try {
        LoaderService.loading();
        await EmprestimoService.devolver(id);
        this.data[index].emprestado = false;
      } catch (error) {
        console.log(error);
      } finally {
        LoaderService.clear();
      }
    }
  }
};
</script>
<style>
</style>

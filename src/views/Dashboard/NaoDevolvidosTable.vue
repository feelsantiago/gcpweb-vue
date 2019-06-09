<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Ainda não devolvidos</h3>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light" :data="items">
        <template slot="columns">
          <th>Titulo</th>
          <th>Tipo</th>
          <th>Devolução</th>
          <th>Amigo</th>
          <th>Devolver</th>
        </template>

        <template slot-scope="{row, index}">
          <th scope="row">{{row.titulo}}</th>
          <td>{{row.tipo}}</td>
          <td>{{row.devolucao}}</td>
          <td>{{ row.amigo }}</td>
          <td>
            <base-button type="success" size="sm" @click="handleDevolver(row.id, index)">Devolver</base-button>
          </td>
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
import EmprestimoService from "../../services/EmprestimoService";
import LoaderService from "../../services/LoaderService";

export default {
  name: "nao-devolvidos-table",
  async mounted() {
    try {
      const result = await EmprestimoService.abertos();
      const data = result.data.content.map(element => {
        return {
          titulo: element.item.titulo,
          tipo: element.item.tipo,
          devolucao: new Date(element.devolucao).toLocaleDateString(),
          amigo: element.amigo.nome,
          id: element.item.id
        };
      });

      this.items = data;
    } catch (error) {
      console.log(error);
    }
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    async handleDevolver(id, index) {
      try {
        LoaderService.loading();
        await EmprestimoService.devolver(id);
        this.items.splice(index, 1);
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

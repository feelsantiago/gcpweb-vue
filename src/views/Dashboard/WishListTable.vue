<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">WishList</h3>
        </div>
        <div class="col text-right">
          <h3>Total: ${{ total }}</h3>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light" :data="items">
        <template slot="columns">
          <th>Titulo</th>
          <th>Tipo</th>
          <th>Disponiblidade</th>
          <th>Preço</th>
          <th>Comprar</th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">{{row.titulo}}</th>
          <td>{{row.tipo}}</td>
          <td>{{row.disponibilidade}}</td>
          <td>{{ '$' + row.preco }}</td>
          <td>
            <a :href="row.url" target="_blank" class="btn btn-sm btn-primary">Comprar</a>
          </td>
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
import ItemService from "../../services/ItemService";
import LoaderService from "../../services/LoaderService";

export default {
  name: "wish-list-table",
  async mounted() {
    try {
      LoaderService.loading();
      const result = await ItemService.getWishList();
      this.items = result.data.content;
    } catch (error) {
      console.log(error);
    } finally {
      LoaderService.clear();
    }
  },
  data() {
    return {
      items: []
    };
  },
  methods: {},
  computed: {
    total() {
      if (this.items.length === 0) return 0;

      const result = this.items
        .map(item => item.preco)
        .reduce((previus, next) => previus + next);
      return result;
    }
  }
};
</script>
<style>
</style>

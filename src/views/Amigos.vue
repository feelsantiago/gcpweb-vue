<template>
  <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
    <amigos-table @adicionar-click="$router.push({ path: 'amigos/create' })" :data="amigos"></amigos-table>
  </base-header>
</template>

<script>
import AmigosTable from "./Tables/AmigosTable";
import AmigoService from "../services/AmigoService";
import LoaderService from "../services/LoaderService";

export default {
  name: "amigos",
  async mounted() {
    await this.refreshTable();
  },
  components: {
    AmigosTable
  },
  data() {
    return {
      amigos: []
    };
  },
  methods: {
    async refreshTable() {
      try {
        LoaderService.loading();
        const result = await AmigoService.getAll();
        this.amigos = result.data.content;
      } catch (error) {
        console.log(error);
      } finally {
        LoaderService.clear();
      }
    }
  }
};
</script>

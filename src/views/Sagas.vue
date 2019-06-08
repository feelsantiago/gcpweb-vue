<template>
  <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
    <sagas-table @adicionar-click="$router.push({ path: 'sagas/create' })"></sagas-table>
  </base-header>
</template>

<script>
import SagasTable from "./Tables/SagasTable";
import SagaService from "../services/SagaService";
import LoaderService from "../services/LoaderService";

export default {
  name: "sagas",
  components: {
    SagasTable
  },
  async mounted() {
    await this.refreshTable();
  },
  data() {
    return {
      sagas: []
    };
  },
  methods: {
    async refreshTable() {
      try {
        LoaderService.loading();
        const result = await SagaService.getAll();
        this.sagas = result.data.content;
      } catch (error) {
        console.log(error);
      } finally {
        LoaderService.clear();
      }
    }
  }
};
</script>

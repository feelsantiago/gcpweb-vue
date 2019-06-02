<template>
  <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
    <sagas-table @adicionar-click="$router.push({ path: 'sagas/create' })"></sagas-table>
  </base-header>
</template>

<script>
import SagasTable from "./Tables/SagasTable";

export default {
  name: "sagas",
  components: {
    SagasTable
  }
};
</script>

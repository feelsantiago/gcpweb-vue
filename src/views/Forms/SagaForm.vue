<template>
  <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
    <div class="card bg-secondary">
      <base-select-multiple
        :columns="['Nome', 'Tipo', 'WishList']"
        :data="tableData"
        :selecteds="selecteds"
        @onSelectionChange="onSelectionChangeHanlder"
      ></base-select-multiple>
    </div>
  </base-header>
</template>

<script>
export default {
  name: "sagas-form",
  data() {
    return {
      tableData: [
        {
          id: 1,
          nome: "Teste",
          tipo: "Tipo",
          wishlist: true
        },
        {
          id: 2,
          nome: "Teste1",
          tipo: "Tipo",
          wishlist: true
        },
        {
          id: 3,
          nome: "Teste2",
          tipo: "Tipo",
          wishlist: true
        }
      ],
      selecteds: [
        {
          id: 3,
          nome: "Teste2",
          tipo: "Tipo",
          wishlist: true
        }
      ]
    };
  },
  methods: {
    onSelectionChangeHanlder(result) {
      console.log(result);
    }
  }
};
</script>


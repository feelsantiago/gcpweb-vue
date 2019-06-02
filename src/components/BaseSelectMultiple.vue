<template>
  <base-table thead-classes="thead-light" :data="data">
    <template slot="columns">
      <th></th>
      <th v-for="(column, index) in columns" :key="index">{{ column }}</th>
    </template>

    <template slot-scope="{row, index}">
      <th scope="row">
        <base-checkbox v-model="binds[index].status" v-on:input="handleSelection(row, $event)"></base-checkbox>
      </th>
      <td v-for="(column, index) in columns" :key="index">{{ itemValue(row, column) }}</td>
    </template>
  </base-table>
</template>

<script>
export default {
  name: "base-select-multiple",
  props: {
    columns: {
      type: Array,
      default: () => [],
      description: "Table columns"
    },
    data: {
      type: Array,
      default: () => [],
      description: "Table data"
    },
    selecteds: {
      type: Array,
      default: () => [],
      description: "Table data"
    }
  },
  data() {
    return {
      binds: [],
      result: []
    };
  },
  methods: {
    itemValue(item, column) {
      return item[column.toLowerCase()];
    },
    handleSelection(value, selection) {
      if (selection) {
        this.result.push(value);
      } else {
        if (this.result.length === 1) {
          this.result = [];
        } else {
          const index = this.result.findIndex(e => e.id === value.id);
          this.result = this.result.splice(index - 1, 1);
        }
      }

      this.$emit("onSelectionChange", this.result);
    }
  },
  created() {
    for (let element of this.data) {
      let finded = false;
      for (let a of this.selecteds) {
        if (a.id === element.id) finded = true;
      }

      if (finded) {
        this.binds.push({ status: finded });
        this.result.push(element);
      } else {
        this.binds.push({ status: finded });
      }
    }
  }
};
</script>


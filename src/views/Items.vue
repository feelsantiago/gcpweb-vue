<template>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        <items-table></items-table>
    </base-header>
</template>

<script>
import ItemsTable from "./Tables/ItemsTable";

export default {
    name: "items",
    components: {
        ItemsTable
    }
};
</script>

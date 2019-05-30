<template>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        <amigos-table></amigos-table>
    </base-header>
</template>

<script>
import AmigosTable from "./Tables/AmigosTable";

export default {
    name: "amigos",
    components: {
        AmigosTable
    }
};
</script>

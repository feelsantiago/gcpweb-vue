<template>
    <div class="card">
        <div class="card-header border-0">
            <div class="row align-items-center">
                <div class="col">
                    <h3 class="mb-0">Items</h3>
                </div>
                <div class="col text-right">
                    <button class="btn btn-sm btn-secondary">Adicionar</button>
                </div>
            </div>
        </div>

        <div class="table-responsive">
            <base-table thead-classes="thead-light" :data="tableData">
                <template slot="columns">
                    <th>Titulo</th>
                    <th>Items</th>
                    <th>Faltam</th>
                    <th></th>
                </template>

                <template slot-scope="{row}">
                    <th scope="row">{{row.titulo}}</th>
                    <td>{{row.items}}</td>
                    <td>{{row.faltam}}</td>
                    <td>
                        <button class="btn btn-sm btn-primary">Editar</button>
                    </td>
                </template>
            </base-table>
        </div>
    </div>
</template>
<script>
export default {
    name: "sagas-table",
    data() {
        return {
            total: 0,
            tableData: [
                {
                    titulo: "HQ 1",
                    items: 1,
                    faltam: 2
                }
            ]
        };
    },
    methods: {}
};
</script>
<style>
</style>

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
            <base-table thead-classes="thead-light" :data="tableData">
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
export default {
    name: "wish-list-table",
    data() {
        return {
            total: 0,
            tableData: [
                {
                    titulo: "HQ 1",
                    tipo: "HQ",
                    disponibilidade: "25/02/2020",
                    preco: "500",
                    url: "http://www.google.com"
                },
                {
                    titulo: "HQ 2",
                    tipo: "HQ",
                    disponibilidade: "25/02/2020",
                    preco: "500",
                    url: "http://www.google.com"
                }
            ]
        };
    },
    methods: {}
};
</script>
<style>
</style>

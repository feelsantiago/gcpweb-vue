<template>
    <div class="card">
        <div class="card-header border-0">
            <div class="row align-items-center">
                <div class="col">
                    <h3 class="mb-0">Ainda não devolvidos</h3>
                </div>
            </div>
        </div>

        <div class="table-responsive">
            <base-table thead-classes="thead-light" :data="tableData">
                <template slot="columns">
                    <th>Titulo</th>
                    <th>Tipo</th>
                    <th>Devolução</th>
                    <th>Amigo</th>
                    <th>Devolver</th>
                </template>

                <template slot-scope="{row}">
                    <th scope="row">{{row.titulo}}</th>
                    <td>{{row.tipo}}</td>
                    <td>{{row.devolucao}}</td>
                    <td>{{ row.amigo }}</td>
                    <td>
                        <base-button type="success" size="sm">Devolver</base-button>
                    </td>
                </template>
            </base-table>
        </div>
    </div>
</template>
<script>
export default {
    name: "nao-devolvidos-table",
    data() {
        return {
            total: 0,
            tableData: [
                {
                    titulo: "HQ 1",
                    tipo: "HQ",
                    devolucao: "25/02/2020",
                    amigo: "Thiago",
                    devolvido: false
                },
                {
                    titulo: "HQ 2",
                    tipo: "HQ",
                    devolucao: "25/02/2020",
                    amigo: "Thiago",
                    devolvido: false
                }
            ]
        };
    },
    methods: {}
};
</script>
<style>
</style>

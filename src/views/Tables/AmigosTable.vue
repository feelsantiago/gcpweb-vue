<template>
    <div class="card">
        <div class="card-header border-0">
            <div class="row align-items-center">
                <div class="col">
                    <h3 class="mb-0">Amigos</h3>
                </div>
                <div class="col text-right">
                    <button class="btn btn-sm btn-primary">Pesquisar</button>
                    <button class="btn btn-sm btn-secondary">Adicionar</button>
                </div>
            </div>
        </div>

        <div class="table-responsive">
            <base-table thead-classes="thead-light" :data="tableData">
                <template slot="columns">
                    <th>Nome</th>
                    <th>Parentesco</th>
                    <th>Telefone</th>
                    <th>Endereço</th>
                    <th></th>
                </template>

                <template slot-scope="{row}">
                    <th scope="row">{{row.nome}}</th>
                    <td>{{row.parentesco}}</td>
                    <td>{{row.telefone}}</td>
                    <td>{{ row.endereco }}</td>
                    <td>
                        <button class="btn btn-sm btn-primary">Editar</button>
                        <button class="btn btn-sm btn-danger">Excluir</button>
                    </td>
                </template>
            </base-table>
        </div>
    </div>
</template>
<script>
export default {
    name: "amigos-table",
    data() {
        return {
            total: 0,
            tableData: [
                {
                    nome: "Thiago",
                    parentesco: "Irmão",
                    telefone: "(83) 9-9959-1313",
                    endereco: "Rua Antonio Coelho Sobrinho, 115"
                }
            ]
        };
    },
    methods: {}
};
</script>
<style>
</style>

<template>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        <items-table
            @adicionar-click="modals.adicionar.status = true"
            @pesquisar-click="modals.pesquisar.status = true"
        ></items-table>

        <!-- Adicionar Modal -->
        <modal :show.sync="modals.adicionar.status">
            <template slot="header">
                <h5 class="modal-title" id="exampleModalLabel">Adicionar Item</h5>
            </template>
            <div>
                <select class="form-control" v-model="modals.adicionar.endpoint">
                    <option value="hq">HQ</option>
                    <option value="dvdcd">DVD/CD</option>
                    <option value="jogodigital">Jogo Digital</option>
                    <option value="dlc">DLC</option>
                    <option value="jogotabuleiro">Jogo Tabuleiro</option>
                </select>
            </div>
            <template slot="footer">
                <base-button type="secondary" @click="modals.adicionar.status = false">Fechar</base-button>
                <base-button @click="adicionar" type="primary">Continuar</base-button>
            </template>
        </modal>

        <!-- Pesquisar Modal -->
        <modal :show.sync="modals.pesquisar.status">
            <template slot="header">
                <h5 class="modal-title" id="exampleModalLabel">Pesquisar Item</h5>
            </template>
            <div>
                <div class="row">
                    <div class="col-lg-4">
                        <label class="form-control-label" for="input-tipo">Tipo</label>
                        <select
                            v-model="modals.pesquisar.model.tipo"
                            name="tipo"
                            id="input-tipo"
                            class="form-control form-control-alternative"
                        >
                            <option value="hq">HQ</option>
                            <option value="dvdcd">DVD/CD</option>
                            <option value="jogodigital">Jogo Digital</option>
                            <option value="dlc">DLC</option>
                            <option value="jogotabuleiro">Jogo de Tabuleiro</option>
                        </select>
                    </div>
                    <div class="col-lg-8">
                        <base-input label="Titulo" placeholder="Titulo"></base-input>
                    </div>
                </div>
                <div class="padding5"></div>
                <div class="row">
                    <div class="col-lg-8">
                        <label class="form-control-label" for="input-estado">Estado</label>
                        <select
                            name="estado"
                            id="input-estado"
                            class="form-control form-control-alternative"
                        >
                            <option>Novo</option>
                            <option>Restaurado</option>
                            <option>Regular</option>
                            <option>Avariado</option>
                            <option>Danificado</option>
                        </select>
                    </div>
                    <div class="col-lg-4 end-checkbox-col div-checkbox">
                        <div class="custom-control mb-3">
                            <base-checkbox class="checkbox-fix">Emprestado</base-checkbox>
                        </div>
                        <div class="custom-control mb-3">
                            <base-checkbox class="checkbox-fix">Repetidos</base-checkbox>
                        </div>
                    </div>
                </div>
                <div class="padding5"></div>
                <hr class="my-4">
                <div class="row div-tipo" v-if="modals.pesquisar.model.tipo === 'hq'">
                    <div class="col-lg-6">
                        <base-input label="Editora" placeholder="Editora"></base-input>
                    </div>
                    <div class="col-lg-6">
                        <base-input label="Universo" placeholder="Universo"></base-input>
                    </div>
                </div>
                <div class="row div-tipo" v-if="modals.pesquisar.model.tipo === 'dvdcd'">
                    <div class="col-lg-12 end-checkbox-col">
                        <div class="custom-control custom-checkbox mb-3">
                            <base-checkbox>Assistidos</base-checkbox>
                        </div>
                    </div>
                </div>
                <div class="row div-tipo" v-if="modals.pesquisar.model.tipo === 'dlc'">
                    <div class="col-lg-12">
                        <base-input label="Localizacao" placeholder="Localização"></base-input>
                    </div>
                </div>
                <div class="row div-tipo" v-if="modals.pesquisar.model.tipo === 'jogodigital'">
                    <div class="col-lg-12">
                        <base-input label="Console" placeholder="Console"></base-input>
                    </div>
                </div>
                <div class="row div-tipo" v-if="modals.pesquisar.model.tipo === 'jogotabuleiro'">
                    <div class="col-lg-12">
                        <base-input label="Marca" placeholder="Marca"></base-input>
                    </div>
                </div>
            </div>
            <template slot="footer">
                <base-button type="secondary" @click="modals.pesquisar.status = false">Fechar</base-button>
                <base-button @click="pesquisar" type="primary">Pesquisar</base-button>
            </template>
        </modal>
    </base-header>
</template>

<script>
import ItemsTable from "./Tables/ItemsTable";

export default {
    name: "items",
    components: {
        ItemsTable
    },
    data() {
        return {
            modals: {
                adicionar: {
                    status: false,
                    endpoint: "hq"
                },
                pesquisar: {
                    status: false,
                    model: {
                        tipo: "hq"
                    }
                }
            }
        };
    },
    methods: {
        adicionar() {
            this.$router.push({
                path: `items/${this.modals.adicionar.endpoint}/create`
            });
        },
        pesquisar() {}
    }
};
</script>

<style scoped>
.checkbox-fix {
    padding-left: 0rem !important;
}
.div-checkbox {
    padding-top: 18px;
}
</style>


<template>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        <div class="card bg-secondary">
            <div class="card-header bg-white border-0">
                <div class="row align-items-center">
                    <div class="col-8">
                        <h3 class="mb-0">{{ titulo }} Saga</h3>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <form>
                    <!-- id -->
                    <input name="id" hidden>

                    <h6 class="heading-small text-muted mb-4">Informações da Saga</h6>

                    <div class="pl-lg-4">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <base-input
                                        label="Titulo"
                                        placeholder="Titulo"
                                        :required="true"
                                        error="Este campo é obrigatorio"
                                        :valid="validTitulo"
                                        v-model="saga.titulo"
                                    ></base-input>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <label class="form-control-label">Items</label>
                                <base-select-multiple
                                    :columns="['Nome', 'Tipo', 'WishList']"
                                    :data="tableData"
                                    :selecteds="selecteds"
                                    @onSelectionChange="onSelectionChangeHanlder"
                                ></base-select-multiple>
                            </div>
                        </div>
                    </div>

                    <hr class="my-4">
                    <div class="row align-right">
                        <div class="col-md-12">
                            <base-button :disable="disabledSubmit" type="success">Salvar</base-button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </base-header>
</template>

<script>
export default {
    name: "sagas-form",
    data() {
        return {
            saga: {
                id: 0,
                titulo: ""
            },
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
            ],
            valid: {
                titulo: false
            },
            disabledSubmit: true
        };
    },
    methods: {
        onSelectionChangeHanlder(result) {
            console.log(result);
        },
        submitValidation() {
            if (this.valid.titulo) this.disabledSubmit = false;
            else this.disabledSubmit = true;
        }
    },
    computed: {
        titulo() {
            return this.saga.id === 0 ? "Adicionar" : "Editar";
        },
        validTitulo() {
            this.valid.titulo =
                this.saga.titulo !== "" && this.saga.titulo !== " ";
            // verify submit button
            this.submitValidation();
            return this.valid.titulo;
        }
    }
};
</script>


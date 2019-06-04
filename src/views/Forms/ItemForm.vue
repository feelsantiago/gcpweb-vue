<template>
    <form>
        <!-- id -->
        <input type="text" id="input-id" hidden>
        <input type="text" id="input-itemId" hidden>

        <!-- Item -->
        <h6 class="heading-small text-muted mb-4">Informações do Item</h6>
        <div class="pl-lg-4">
            <div class="row">
                <div class="col-lg-8">
                    <div class="form-group">
                        <base-input
                            label="Titulo"
                            placeholder="Titulo"
                            :required="true"
                            error="Este campo é obrigatorio"
                            v-model="item.titulo"
                            :valid="validTitulo"
                        ></base-input>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label class="form-control-label" for="input-estado">Estado</label>
                        <select
                            id="input-estado"
                            class="form-control form-control-alternative"
                            v-model="item.estado"
                        >
                            <option>Novo</option>
                            <option>Restaurado</option>
                            <option>Regular</option>
                            <option>Avariado</option>
                            <option>Danificado</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <div class="form-group">
                        <base-input
                            type="number"
                            label="Preço"
                            placeholder="$"
                            v-model="item.preco"
                        ></base-input>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="form-group">
                        <base-input
                            type="number"
                            label="Quantidade"
                            :required="true"
                            error="Este campo é obrigatorio"
                            placeholder="0"
                            v-model="item.quantidade"
                            :valid="validQuantidade"
                        ></base-input>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="form-group">
                        <base-input
                            type="number"
                            label="Importancia"
                            :required="true"
                            error="Este campo é obrigatorio"
                            placeholder="1-5"
                            v-model="item.importancia"
                            :valid="validImportancia"
                        ></base-input>
                    </div>
                </div>
                <div class="col-lg-2 center-checkbox">
                    <div class="custom-control custom-checkbox mb-3">
                        <base-checkbox v-model="item.wishlist">Wishlist</base-checkbox>
                    </div>
                </div>
                <!-- <div class="col-lg-2 center-checkbox">
                    <div class="custom-control custom-checkbox mb-3">
                        <base-checkbox>Emprestado</base-checkbox>
                    </div>
                </div>-->
            </div>
            <div v-if="item.wishlist" class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <base-input label="url" placeholder="url" v-model="item.url"></base-input>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label class="form-control-label">Disponibilidade</label>
                        <base-input
                            addon-left-icon="ni ni-calendar-grid-58"
                            placeholder="Selecione uma data"
                        >
                            <flat-picker
                                slot-scope="{focus, blur}"
                                @on-open="focus"
                                @on-close="blur"
                                :config="{allowInput: true}"
                                class="form-control datepicker"
                                v-model="item.disponibilidade"
                            ></flat-picker>
                        </base-input>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <label>Observações</label>
                    <textarea
                        rows="4"
                        class="form-control form-control-alternative"
                        v-model="item.observacoes"
                    ></textarea>
                </div>
            </div>
        </div>
        <hr class="my-4">
        <slot></slot>
    </form>
</template>

<script>
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
    name: "item-form",
    components: { flatPicker },
    props: {
        validSlot: {
            type: Object,
            description: "Object with boolean values to validate slot inputs",
            default: {}
        }
    },
    data() {
        return {
            valid: {
                titulo: false,
                quantidade: false,
                importancia: false
            },
            item: {
                titulo: "",
                estado: "",
                preco: 0,
                quantidade: 0,
                importancia: 0,
                wishlist: false,
                emprestado: false,
                url: "",
                disponibilidade: "",
                observações: ""
            }
        };
    },
    methods: {
        validateSubmit() {
            if (
                this.valid.titulo &&
                this.valid.quantidade &&
                this.valid.importancia
            ) {
                this.$emit("onFormValidation", true);
            } else this.$emit("onFormValidation", false);
        }
    },
    computed: {
        validTitulo() {
            this.valid.titulo =
                this.item.titulo !== "" && this.item.titulo !== " ";

            this.validateSubmit();
            return this.valid.titulo;
        },
        validQuantidade() {
            this.valid.quantidade = this.item.quantidade > 0;

            this.validateSubmit();
            return this.valid.quantidade;
        },
        validImportancia() {
            this.valid.importancia = this.item.importancia > 0;

            this.validateSubmit();
            return this.valid.importancia;
        }
    }
};
</script>

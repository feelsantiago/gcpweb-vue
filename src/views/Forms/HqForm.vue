<template>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        <div class="card bg-secondary shadow">
            <div class="card-header bg-white border-0">
                <div class="row align-items-center">
                    <div class="col-8">
                        <h3 class="mb-0">Adicionar HQ</h3>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <item-form
                    :validSlot="valid"
                    @onFormValidation="handleOnFormValidation"
                    @onValueChange="handleValueChange"
                >
                    <h6 class="heading-small text-muted mb-4">Informações da Hq</h6>
                    <div class="pl-lg-4">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <base-input
                                        label="Numero"
                                        placeholder="Numero"
                                        type="number"
                                        v-model="hq.numero"
                                    ></base-input>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <base-input
                                        label="Editora"
                                        placeholder="Editora"
                                        :required="true"
                                        error="Este campo é obrigatorio"
                                        :valid="validEditora"
                                        v-model="hq.editora"
                                    ></base-input>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <base-input
                                        label="Universo"
                                        placeholder="Universo"
                                        v-model="hq.universo"
                                    ></base-input>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <base-input label="Saga" placeholder="Saga" v-model="hq.saga"></base-input>
                                </div>
                            </div>
                        </div>
                    </div>
                </item-form>
                <hr class="my-4">
                <div class="row align-right">
                    <div class="col-md-12">
                        <base-button type="success" :disable="disabledSubmit">Salvar</base-button>
                    </div>
                </div>
            </div>
        </div>
    </base-header>
</template>

<script>
import ItemForm from "./ItemForm";

export default {
    name: "hq-form",
    components: { ItemForm },
    data() {
        return {
            disabledSubmit: true,
            valid: {
                editora: false
            },
            hq: {
                numero: 0,
                editora: "",
                universo: "",
                saga: ""
            },
            item: {}
        };
    },
    methods: {
        handleOnFormValidation(value) {
            if (this.valid.editora && value) this.disabledSubmit = false;
            else this.disabledSubmit = true;
        },
        handleValueChange(value) {
            this.item = value;
            console.log(this.item);
        }
    },
    computed: {
        validEditora() {
            this.valid.editora =
                this.hq.editora !== "" && this.hq.editora !== " ";

            return this.valid.editora;
        }
    }
};
</script>

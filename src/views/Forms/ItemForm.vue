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
                        <base-input label="Titulo" placeholder="Titulo"></base-input>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label class="form-control-label" for="input-estado">Estado</label>
                        <select id="input-estado" class="form-control form-control-alternative">
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
                        <base-input type="number" label="Preço" placeholder="$"></base-input>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="form-group">
                        <base-input type="number" label="Quantidade" placeholder="0"></base-input>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="form-group">
                        <base-input type="number" label="Importancia" placeholder="1-5"></base-input>
                    </div>
                </div>
                <div class="col-lg-2 center-checkbox">
                    <div class="custom-control custom-checkbox mb-3">
                        <base-checkbox>Wishlist</base-checkbox>
                    </div>
                </div>
                <div class="col-lg-2 center-checkbox">
                    <div class="custom-control custom-checkbox mb-3">
                        <base-checkbox>Emprestado</base-checkbox>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <base-input label="url" placeholder="url"></base-input>
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
                                v-model="date"
                            ></flat-picker>
                        </base-input>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <label>Observações</label>
                    <textarea rows="4" class="form-control form-control-alternative"></textarea>
                </div>
            </div>
        </div>
        <hr class="my-4">
    </form>
</template>

<script>
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
    name: "item-form",
    components: { flatPicker },
    data() {
        return {
            date: ""
        };
    }
};
</script>

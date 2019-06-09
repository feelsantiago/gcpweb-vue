<template>
  <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
    <div class="card bg-secondary shadow">
      <div class="card-header bg-white border-0">
        <div class="row align-items-center">
          <div class="col-8">
            <h3 class="mb-0">Emprestar Item</h3>
          </div>
        </div>
      </div>
      <div class="card-body">
        <form>
          <!-- Item -->
          <h6 class="heading-small text-muted mb-4">Informações do Emprestimo</h6>
          <div class="pl-lg-4">
            <div class="row">
              <div class="col-lg-8">
                <div class="form-group">
                  <base-input label="Titulo" placeholder="Titulo" disabled v-model="item.titulo"></base-input>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group">
                  <base-input label="Tipo" placeholder="Tipo" disabled v-model="item.tipo"></base-input>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-7">
                <div class="form-group">
                  <label class="form-control-label" for="input-amigo">Amigo</label>
                  <select
                    id="input-amigo"
                    class="form-control"
                    placeholder
                    v-model="emprestimo.amigo"
                    :class="[ valid.amigo ? 'is-valid' : 'is-invalid' ]"
                  >
                    <option
                      v-for="(amigo, index) in amigos"
                      :key="index"
                      :value="amigo.id"
                    >{{ amigo.nome }}</option>
                  </select>
                  <div
                    v-if="!valid.amigo"
                    class="text-danger invalid-feedback"
                    style="display: block;"
                  >Este campo é obrigatorio</div>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="form-group">
                  <label class="form-control-label">Devolução</label>
                  <base-input
                    addon-left-icon="ni ni-calendar-grid-58"
                    placeholder="Selecione uma data"
                    :required="true"
                    error="Este campo é obrigatorio"
                    :valid="valid.devolucao"
                  >
                    <flat-picker
                      slot-scope="{focus, blur}"
                      @on-open="focus"
                      @on-close="blur"
                      :config="{allowInput: true}"
                      class="form-control datepicker"
                      v-model="emprestimo.devolucao"
                    ></flat-picker>
                  </base-input>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-4">
          <div class="row align-right">
            <div class="col-md-12">
              <base-button type="success" :disable="!valid.submit" @click="submitForm">Salvar</base-button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </base-header>
</template>

<script>
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import LoaderService from "../../services/LoaderService";
import AmigoService from "../../services/AmigoService";
import ItemService from "../../services/ItemService";
import EmprestimoService from "../../services/EmprestimoService";

export default {
  name: "emprestimo-form",
  components: { flatPicker },
  created() {
    this.item.id = this.$route.params.id;
  },
  async mounted() {
    try {
      LoaderService.loading();
      const amigo_result = await AmigoService.getAll();
      const item = await ItemService.getById(this.item.id);
      this.amigos = amigo_result.data.content;
      this.item = item.data;
    } catch (error) {
      console.log(error);
    } finally {
      LoaderService.clear();
    }
  },
  data() {
    return {
      amigos: [],
      valid: {
        amigo: false,
        devolucao: false,
        submit: false
      },
      item: {
        id: 0,
        titulo: "",
        tipo: ""
      },
      emprestimo: {
        amigo: 0,
        devolucao: ""
      }
    };
  },
  methods: {
    submitValidation() {
      if (this.valid.amigo && this.valid.devolucao) this.valid.submit = true;
      else this.valid.submit = false;
    },
    async submitForm() {
      try {
        LoaderService.loading();
        const payload = {
          item: this.item.id,
          amigo: this.emprestimo.amigo,
          devolucao: this.emprestimo.devolucao
        };
        await EmprestimoService.save(payload);
        this.$router.push({ path: "/items" });
      } catch (error) {
        console.log(error);
      } finally {
        LoaderService.clear();
      }
    }
  },
  watch: {
    "emprestimo.amigo": function(newValue, oldValue) {
      if (newValue && newValue !== 0) this.valid.amigo = true;
      else this.valid.amigo = false;

      this.submitValidation();
    },
    "emprestimo.devolucao": function(newValue, oldValue) {
      if (newValue && newValue !== "" && newValue !== " ")
        this.valid.devolucao = true;
      else this.valid.devolucao = false;

      this.submitValidation();
    }
  }
};
</script>


<template>
  <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
    <div class="card bg-secondary shadow">
      <div class="card-header bg-white border-0">
        <div class="row align-items-center">
          <div class="col-8">
            <h3 class="mb-0">Adicionar</h3>
          </div>
        </div>
      </div>
      <div class="card-body">
        <item-form
          :validSlot="valid"
          @onFormValidation="handleOnFormValidation"
          @onValueChange="handleValueChange"
        >
          <h6 class="heading-small text-muted mb-4">Informações do Dvd/Cd</h6>
          <div class="pl-lg-4">
            <div class="row">
              <div class="col-lg-4">
                <div class="form-group">
                  <base-input label="Marca" placeholder="Marca"></base-input>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group">
                  <base-input
                    label="Conteudo"
                    placeholder="Conteudo"
                    v-model="dvdcd.conteudo"
                    :required="true"
                    error="Este campo é obrigatorio"
                    :valid="validConteudo"
                  ></base-input>
                </div>
              </div>
              <div class="col-lg-4 center-checkbox">
                <div class="custom-control custom-checkbox mb-3">
                  <base-checkbox v-model="dvdcd.assistido">Assistido</base-checkbox>
                </div>
              </div>
            </div>
          </div>
        </item-form>
        <hr class="my-4">
        <div class="row align-right">
          <div class="col-md-12">
            <base-button type="success" :disable="disabledSubmit" @click="submitForm">Salvar</base-button>
          </div>
        </div>
      </div>
    </div>
  </base-header>
</template>

<script>
import ItemForm from "./ItemForm";
import LoaderService from "../../services/LoaderService";
import DvdCdService from "../../services/DvdCdService";

export default {
  name: "dvdcd-form",
  components: { ItemForm },
  data() {
    return {
      disabledSubmit: true,
      valid: {
        conteudo: false
      },
      dvdcd: {
        marca: "",
        conteudo: "",
        assistido: false
      },
      item: {}
    };
  },
  methods: {
    handleOnFormValidation(value) {
      if (this.valid.conteudo && value) this.disabledSubmit = false;
      else this.disabledSubmit = true;
    },
    handleValueChange(value) {
      this.item = value;
      console.log(this.item);
    },
    async submitForm() {
      try {
        LoaderService.loading();
        const payload = Object.assign({}, this.item, this.dvdcd);
        await DvdCdService.save(payload);
      } catch (error) {
        console.log(error);
      } finally {
        LoaderService.clear();
        this.$router.push({ path: "/items" });
      }
    }
  },
  computed: {
    validConteudo() {
      this.valid.conteudo =
        this.dvdcd.conteudo !== "" && this.dvdcd.conteudo !== " ";

      return this.valid.conteudo;
    }
  }
};
</script>

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
          <h6 class="heading-small text-muted mb-4">Informações da Dlc</h6>
          <div class="pl-lg-4">
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group">
                  <base-input
                    label="Localizacao"
                    placeholder="Localização"
                    :required="true"
                    error="Este campo é obrigatorio"
                    :valid="validLocalizacao"
                    v-model="dlc.localizacao"
                  ></base-input>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="form-control-label" for="input-jogo">Jogo</label>
                  <select
                    id="input-jogo"
                    class="form-control"
                    v-model="dlc.jogo"
                    :class="[ valid.jogo ? 'is-valid' : 'is-invalid' ]"
                  >
                    <option
                      v-for="(jogo, index) in jogos"
                      :key="index"
                      :value="jogo.id"
                    >{{ jogo.titulo }}</option>
                  </select>
                  <div
                    v-if="!validJogo"
                    class="text-danger invalid-feedback"
                    style="display: block;"
                  >Este campo é obrigatorio</div>
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
import DlcService from "../../services/DlcSercive";
import ItemService from "../../services/ItemService";

export default {
  name: "dlc-form",
  components: { ItemForm },
  async mounted() {
    try {
      LoaderService.loading();
      const result = await ItemService.getAll({ tipo: "jogodigital" });
      this.jogos = result.data.content;
      console.log(this.jogos);
    } catch (error) {
      console.log(error);
    } finally {
      LoaderService.clear();
    }
  },
  data() {
    return {
      disabledSubmit: true,
      valid: {
        localizacao: false,
        jogo: false
      },
      dlc: {
        localizacao: "",
        jogo: 0
      },
      item: {},
      jogos: []
    };
  },
  methods: {
    handleOnFormValidation(value) {
      if (this.valid.localizacao && value) this.disabledSubmit = false;
      else this.disabledSubmit = true;
    },
    handleValueChange(value) {
      this.item = value;
      console.log(this.item);
    },
    async submitForm() {
      try {
        LoaderService.loading();
        const payload = Object.assign({}, this.item, this.dlc);
        await DlcService.save(payload);
        this.$router.psuh({ path: "/item" });
      } catch (error) {
        console.log(error);
      } finally {
        LoaderService.clear();
      }
    }
  },
  computed: {
    validLocalizacao() {
      this.valid.localizacao =
        this.dlc.localizacao !== "" && this.dlc.localizacao !== " ";

      return this.valid.localizacao;
    },
    validJogo() {
      this.valid.jogo = this.dlc.jogo > 0;

      return this.valid.jogo;
    }
  }
};
</script>

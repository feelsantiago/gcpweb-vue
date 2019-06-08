<template>
  <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
    <div class="card bg-secondary">
      <div class="card-header bg-white border-0">
        <div class="row align-items-center">
          <div class="col-8">
            <h3 class="mb-0">{{ titulo }} Amigo</h3>
          </div>
        </div>
      </div>
      <div class="card-body">
        <form>
          <!-- id -->
          <input name="id" hidden>

          <h6 class="heading-small text-muted mb-4">Informações do Amigo</h6>
          <div class="pl-lg-4">
            <div class="row">
              <div class="col-lg-8">
                <div class="form-group">
                  <base-input
                    label="Nome"
                    placeholder="Nome"
                    :required="true"
                    error="Este campo é obrigatorio"
                    :valid="validNome"
                    v-model="amigo.nome"
                  ></base-input>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group focused">
                  <label class="form-control-label" for="input-sexo">Sexo</label>
                  <select
                    id="input-sexo"
                    class="form-control form-control-alternative"
                    placeholder
                    name="sexo"
                    v-model="amigo.sexo"
                  >
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group">
                  <base-input
                    label="Parentesco"
                    placeholder="Parentesco"
                    v-model="amigo.parentesco"
                  ></base-input>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <base-input
                    label="Telefone"
                    type="text"
                    placeholder="Telefone"
                    v-model="amigo.telefone"
                  ></base-input>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="form-group">
                  <base-input label="Endereço" placeholder="Endereço" v-model="amigo.endereco"></base-input>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-4">
          <div class="row align-right">
            <div class="col-md-12">
              <base-button :disable="disabledSubmit" type="success" @click="submitForm">Salvar</base-button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </base-header>
</template>

<script>
import LoaderService from "../../services/LoaderService";
import AmigoService from "../../services/AmigoService";

export default {
  name: "amigos-form",
  data() {
    return {
      amigo: {
        id: 0,
        nome: "",
        sexo: "M",
        parentesco: "",
        telefone: "",
        endereco: ""
      },
      valid: {
        nome: false
      },
      disabledSubmit: true
    };
  },
  methods: {
    submitValidation() {
      if (this.valid.nome) this.disabledSubmit = false;
      else this.disabledSubmit = true;
    },
    async submitForm() {
      try {
        LoaderService.loading();
        const payload = Object.assign({}, this.amigo);
        await AmigoService.save(payload);
        this.$router.push({ path: "/amigos" });
      } catch (error) {
        console.log(error);
      } finally {
        LoaderService.clear();
      }
    }
  },
  computed: {
    titulo() {
      return this.amigo.id === 0 ? "Adicionar" : "Editar";
    },
    validNome() {
      this.valid.nome = this.amigo.nome !== "" && this.amigo.nome !== " ";
      // verify submit button
      this.submitValidation();
      return this.valid.nome;
    }
  }
};
</script>


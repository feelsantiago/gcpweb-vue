<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <div class="btn-wrapper text-center">
              <img src="img/brand/gcp-logo.jpg" width="100px" height="100px">
            </div>
            <small>{{ title }}</small>
          </div>
          <form role="form">
            <base-input
              class="input-group-alternative mb-3"
              placeholder="Nome do Usuario"
              addon-left-icon="ni ni-email-83"
              v-model="model.username"
              :required="true"
              :valid="validUserName"
            ></base-input>

            <base-input
              class="input-group-alternative"
              placeholder="Senha"
              type="password"
              addon-left-icon="ni ni-lock-circle-open"
              v-model="model.password"
              :required="true"
              :valid="validPassword"
            ></base-input>

            <div class="text-center">
              <base-button
                :disable="disabledSubmit"
                type="primary"
                class="my-4"
                @click="login"
              >{{ isLogin ? 'Entrar' : 'Registrar' }}</base-button>
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <a href="#" class="text-light">
            <small>Esqueceu sua senha?</small>
          </a>
        </div>
        <div class="col-6 text-right">
          <a @click="handleCriarConta" class="text-light pointer">
            <small>{{ isLogin ? 'Criar Usuario' : 'Login' }}</small>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LoginService from "../services/LoginService";
import UserService from "../services/UserService";
import LoaderService from "../services/LoaderService";
import AuthService from "../services/AuthService";

export default {
  name: "login",
  data() {
    return {
      isLogin: true,
      valid: {
        username: false,
        password: false
      },
      disabledSubmit: true,
      model: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    async login() {
      try {
        this.disabledSubmit = true;
        LoaderService.loading();

        if (this.isLogin) {
          const result = await LoginService.login(this.model);
          AuthService.setUserAuthentication(this.model, result.data);
          this.$router.push({ path: "dashboard" });
        } else {
          const result = await UserService.save(this.model);
          this.isLogin = true;
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.disabledSubmit = false;
        LoaderService.clear();
      }
    },
    submitValidation() {
      if (this.valid.username && this.valid.password)
        this.disabledSubmit = false;
      else this.disabledSubmit = true;
    },
    handleCriarConta() {
      this.isLogin = !this.isLogin;
    }
  },
  computed: {
    validUserName() {
      this.valid.username =
        this.model.username !== "" && this.model.username !== " ";

      this.submitValidation();
      return this.valid.username;
    },
    validPassword() {
      this.valid.password =
        this.model.password !== "" && this.model.password !== " ";

      this.submitValidation();
      return this.valid.password;
    },
    title() {
      if (this.isLogin) return "Entrar";
      else return "Registrar";
    }
  }
};
</script>
<style>
.pointer {
  cursor: pointer;
}
</style>

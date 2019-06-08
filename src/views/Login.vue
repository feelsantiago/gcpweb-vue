<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <div class="btn-wrapper text-center">
              <img src="img/brand/gcp-logo.jpg" width="100px" height="100px">
            </div>
            <small>Entrar</small>
          </div>
          <form role="form">
            <base-input
              class="input-group-alternative mb-3"
              placeholder="Nome do Usuario"
              addon-left-icon="ni ni-email-83"
              v-model="model.username"
            ></base-input>

            <base-input
              class="input-group-alternative"
              placeholder="Senha"
              type="password"
              addon-left-icon="ni ni-lock-circle-open"
              v-model="model.password"
            ></base-input>

            <base-checkbox class="custom-control-alternative">
              <span class="text-muted">Lembrar-me</span>
            </base-checkbox>
            <div class="text-center">
              <base-button type="primary" class="my-4" @click="login">Entrar</base-button>
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
          <router-link to="/register" class="text-light">
            <small>Criar uma nova conta</small>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LoginService from "../services/LoginService";

export default {
  name: "login",
  data() {
    return {
      model: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    async login() {
      try {
        const result = await LoginService.login(this.model);
        console.log(result);
      } catch (error) {
        console.log(error);
      }

      // this.$router.push({ path: "dashboard" });
    }
  }
};
</script>
<style>
</style>

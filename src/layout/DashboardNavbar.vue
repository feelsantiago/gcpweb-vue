<template>
  <base-nav class="navbar-top navbar-dark" id="navbar-main" :show-toggle-button="false" expand>
    <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
      <div class="form-group mb-0"></div>
    </form>
    <ul class="navbar-nav align-items-center d-none d-md-flex">
      <li class="nav-item dropdown">
        <base-dropdown class="nav-link pr-0">
          <div class="media align-items-center" slot="title">
            <span class="avatar avatar-sm rounded-circle">
              <img alt="Image placeholder" src="img/theme/user-profile.png">
            </span>
            <div class="media-body ml-2 d-none d-lg-block">
              <span class="mb-0 text-sm font-weight-bold">Usuario Logado</span>
            </div>
          </div>

          <template>
            <div class="dropdown-header noti-title">
              <h6 class="text-overflow m-0">Bem Vindo!</h6>
            </div>
            <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-single-02"></i>
              <span>Meu perfil</span>
            </router-link>
            <div class="dropdown-divider"></div>
            <base-button @click="deslogar" class="dropdown-item">
              <i class="ni ni-user-run"></i>
              <span>Deslogar</span>
            </base-button>
          </template>
        </base-dropdown>
      </li>
    </ul>
  </base-nav>
</template>
<script>
import AuthService from "../services/AuthService";

export default {
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchQuery: ""
    };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    deslogar() {
      AuthService.clearAuthentication();
      this.$router.push({ path: "login" });
    }
  }
};
</script>

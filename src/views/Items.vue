<template>
  <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
    <items-table
      @adicionar-click="modals.adicionar = true"
      @pesquisar-click="modals.pesquisar = true"
    ></items-table>

    <!-- Adicionar Modal -->
    <modal :show.sync="modals.adicionar">
      <template slot="header">
        <h5 class="modal-title" id="exampleModalLabel">Adicionar Item</h5>
      </template>
      <div>
        <select class="form-control" v-model="endpoint">
          <option value="hq">HQ</option>
          <option value="dvdcd">DVD/CD</option>
          <option value="jogodigital">Jogo Digital</option>
          <option value="dlc">DLC</option>
          <option value="jogotabuleiro">Jogo Tabuleiro</option>
        </select>
      </div>
      <template slot="footer">
        <base-button type="secondary" @click="modals.adicionar = false">Fechar</base-button>
        <base-button @click="adicionar" type="primary">Continuar</base-button>
      </template>
    </modal>

    <!-- Pesquisar Modal -->
    <modal :show.sync="modals.pesquisar">
      <template slot="header">
        <h5 class="modal-title" id="exampleModalLabel">Pesquisar Item</h5>
      </template>
      <div>
        <div class="row">
          <div class="col-lg-4">
            <label class="form-control-label" for="input-tipo">Tipo</label>
            <select
              v-model="pesquisar.tipo"
              name="tipo"
              id="input-tipo"
              class="form-control form-control-alternative"
            >
              <option value="hq">HQ</option>
              <option value="dvdcd">DVD/CD</option>
              <option value="jogodigital">Jogo Digital</option>
              <option value="dlc">DLC</option>
              <option value="jogotabuleiro">Jogo de Tabuleiro</option>
            </select>
          </div>
          <div class="col-lg-8">
            <label class="form-control-label" for="input-titulo">Titulo</label>
            <base-input id="input-titulo" placeholder="Titulo"></base-input>
          </div>
        </div>
        <div class="padding5"></div>
        <div class="row">
          <div class="col-lg-8">
            <label class="form-control-label" for="input-estado">Estado</label>
            <select name="estado" id="input-estado" class="form-control form-control-alternative">
              <option>Novo</option>
              <option>Restaurado</option>
              <option>Regular</option>
              <option>Avariado</option>
              <option>Danificado</option>
            </select>
          </div>
          <div class="col-lg-4 end-checkbox-col div-checkbox">
            <div class="custom-control mb-3">
              <base-checkbox class="checkbox-fix" id="input-emprestado">Emprestado</base-checkbox>
            </div>
            <div class="custom-control mb-3">
              <base-checkbox class="checkbox-fix" id="input-repetidos">Repetidos</base-checkbox>
            </div>
          </div>
        </div>
        <div class="padding5"></div>
        <hr class="my-4">
        <div class="row div-tipo" v-if="pesquisar.tipo === 'hq'">
          <div class="col-lg-6">
            <label class="form-control-label" for="base-input-editora">Editora</label>
            <base-input id="input-editora" placeholder="Editora"></base-input>
          </div>
          <div class="col-lg-6">
            <label class="form-control-label" for="input-universo">Universo</label>
            <base-input id="input-universo" placeholder="Universo"></base-input>
          </div>
        </div>
        <div class="row div-tipo" v-if="pesquisar.tipo === 'dvdcd'">
          <div class="col-lg-12 end-checkbox-col">
            <div class="custom-control custom-checkbox mb-3">
              <base-checkbox>Assistidos</base-checkbox>
            </div>
          </div>
        </div>
        <div class="row div-tipo" v-if="pesquisar.tipo === 'dlc'">
          <div class="col-lg-12">
            <label class="form-control-label" for="input-localizacao">Localização</label>
            <base-input id="input-localizacao" placeholder="Localização"></base-input>
          </div>
        </div>
        <div class="row div-tipo" v-if="pesquisar.tipo === 'jogodigital'">
          <div class="col-lg-12">
            <label class="form-control-label" for="input-console">Console</label>
            <base-input id="input-console" placeholder="Console"></base-input>
          </div>
        </div>
        <div class="row div-tipo" v-if="pesquisar.tipo === 'jogotabuleiro'">
          <div class="col-lg-12">
            <label class="form-control-label" for="input-marca">Marca</label>
            <base-input id="input-marca" placeholder="Marca"></base-input>
          </div>
        </div>
      </div>
      <template slot="footer">
        <base-button type="secondary" @click="modals.pesquisar = false">Fechar</base-button>
        <base-button @click="pesquisar" type="primary">Pesquisar</base-button>
      </template>
    </modal>
  </base-header>
</template>

<script>
import ItemsTable from "./Tables/ItemsTable";

export default {
  name: "items",
  components: {
    ItemsTable
  },
  data() {
    return {
      endpoint: "hq",
      modals: {
        adicionar: false,
        pesquisar: false
      },
      pesquisar: {
        tipo: "hq"
      }
    };
  },
  methods: {
    adicionar() {
      console.log(this.endpoint);
    },
    pesquisar() {}
  }
};
</script>

<style scoped>
.checkbox-fix {
  padding-left: 0rem !important;
}
.div-checkbox {
  padding-top: 18px;
}
</style>


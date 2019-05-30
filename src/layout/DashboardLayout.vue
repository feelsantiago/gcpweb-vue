<template>
    <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
        <side-bar :background-color="sidebarBackground" short-title="Argon" title="Argon">
            <template slot="links">
                <sidebar-item
                    :link="{name: 'Inicio', icon: 'ni ni-tv-2 text-blue', path: '/icons'}"
                />
                <sidebar-item
                    :link="{name: 'Items', icon: 'ni ni-box-2 text-blue', path: '/items'}"
                />
                <sidebar-item
                    :link="{name: 'Sagas', icon: 'ni ni-archive-2 text-blue', path: '/sagas'}"
                />
                <sidebar-item
                    :link="{name: 'Amigos', icon: 'ni ni-single-02 text-blue', path: '/amigos'}"
                />
            </template>
        </side-bar>
        <div class="main-content" :data="sidebarBackground">
            <dashboard-navbar></dashboard-navbar>

            <div @click="toggleSidebar">
                <fade-transition :duration="200" origin="center top" mode="out-in">
                    <!-- your content here -->
                    <router-view></router-view>
                </fade-transition>
                <content-footer v-if="!$route.meta.hideFooter"></content-footer>
            </div>
        </div>
    </div>
</template>
<script>
import DashboardNavbar from "./DashboardNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import { FadeTransition } from "vue2-transitions";

export default {
    components: {
        DashboardNavbar,
        ContentFooter,
        FadeTransition
    },
    data() {
        return {
            sidebarBackground: "vue" //vue|blue|orange|green|red|primary
        };
    },
    methods: {
        toggleSidebar() {
            if (this.$sidebar.showSidebar) {
                this.$sidebar.displaySidebar(false);
            }
        }
    }
};
</script>
<style lang="scss">
</style>

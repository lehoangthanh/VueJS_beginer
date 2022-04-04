<template>
  <div id="app" class="g-sidenav-show bg-gray-100">
    <div class="min-height-300 bg-primary position-absolute w-100"></div>
    <ComSideNav />
    <main class="main-content position-relative border-radius-lg">
      <!-- Navbar -->
      <ComNav />
      <!-- End Navbar -->
      <div class="container-fluid py-4">
        <router-view />
        <ComFooter />
      </div>
    </main>
    <!-- <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
      <ComNav />
      <div class="flex-lg-1 h-screen overflow-y-lg-auto">
        <ComHeader />
        <main class="py-6 bg-surface-secondary">
          <div class="container-fluid">
            <router-view />
          </div>
        </main>
      </div>
      <router-view
        labelUsername = 'Username'
        labelPassword = 'Password'
        buttonPassword = 'Submit'
      />
    </div> -->
  </div>
</template>
<script>
import "./assets/js/plugins/perfect-scrollbar.min";
import "./assets/js/plugins/smooth-scrollbar.min";
import "./assets/js/fontawesome_42d5adcbca";

import ComSideNav from "./components/ComSideNav.vue";
import ComNav from "./components/ComNav.vue";
import ComHeader from "./components/ComHeader.vue";
import ComFooter from "./components/ComFooter.vue";
export default {
  name: "app",
  data() {
    return {
    };
  },
  components: {
    ComSideNav,
    ComNav,
    ComHeader,
    ComFooter,
  },
};
</script>

<style lang="scss">
@import './assets/css/nucleo-icons.css';
@import './assets/css/nucleo-svg.css';
@import './assets/css/argon-dashboard.css';
</style>

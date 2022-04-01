<template>
  <div id="app">
    <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
      <ComNav />
      <div class="flex-lg-1 h-screen overflow-y-lg-auto">
        <ComHeader />
        <main class="py-6 bg-surface-secondary">
          <div class="container-fluid">
            <router-view />
          </div>
        </main>
      </div>
      <!-- <router-view 
        labelUsername = 'Username'
        labelPassword = 'Password'
        buttonPassword = 'Submit'
      /> -->
      <!-- <ComFooter />  -->
    </div>
  </div>
</template>
<script>
import ComNav from "./components/ComNav.vue";
import ComHeader from "./components/ComHeader.vue";
import ComFooter from "./components/ComFooter.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    ComNav,
    ComHeader,
    ComFooter,
  },
};
</script>

<style lang="scss">
  @import './assets/css/main.css';
  @import './assets/css/utilities.css';
</style>

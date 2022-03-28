<template>
  <div id="app">
    <ComHeader />
    <router-view />
    <ComFooter /> 
  </div>
</template>

<script>
import ComHeader from './components/ComHeader.vue';
import ComFooter from './components/ComFooter.vue';
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    ComHeader,
    ComFooter,
  },
}
</script>

<style lang="scss">

</style>

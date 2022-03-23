<template>
  <div id="app">
    <ComHeader />
    <ComBody 
      v-bind:labelEmail="labelEmail"
      v-bind:labelPassword="labelPassword"
      v-bind:buttonPassword="buttonPassword"
    />
    <ComFooter /> 
  </div>
</template>

<script>
import ComHeader from './components/ComHeader.vue';
import ComBody from './components/ComBody.vue';
import ComFooter from './components/ComFooter.vue';
export default {
  name: 'app',
  data () {
    return {
      labelEmail: 'Email Address',
      labelPassword: 'Password',
      buttonPassword: 'Submit'
    }
  },
  components: {
    ComHeader,
    ComFooter,
    ComBody
  }
}
</script>

<style lang="scss">

</style>

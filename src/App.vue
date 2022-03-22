<template>
  <div id="app">
    <ComHeader />
    <ComBody />
    <ComFooter /> 

  </div>
</template>

<script>
import ComHeader from './components/ComHeader.vue';
import ComBody from './components/ComBody.vue';
import ComFooter from './components/ComFooter.vue';
export default {
  name: 'app',
  components: {
    ComHeader,
    ComFooter,
    ComBody
  }
}
</script>

<style lang="scss">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// h1, h2 {
//   font-weight: normal;
// }

// ul {
//   list-style-type: none;
//   padding: 0;
// }

// li {
//   display: inline-block;
//   margin: 0 10px;
// }

// a {
//   color: #42b983;
// }
</style>

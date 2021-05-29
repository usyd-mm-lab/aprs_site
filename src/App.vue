<template>
  <div id="app">
    <Navs></Navs>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navs from './components/Navs';
import Footer from "./components/Footer";
export default {
  name: 'App',
  components: {
    Navs,Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>

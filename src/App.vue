<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Training />
  </div>
</template>

<script>
// import Binding from "./components/Binding";
import Training from "./components/Training";

export default {
  name: "App",
  el: "App",
  components: {
    Training
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

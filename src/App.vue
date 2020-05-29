<template>
  <div id="app">
    <SalesProject />
  </div>
</template>

<script>
import SalesProject from './components/SalesProject';

export default {
    name: 'App',
    components: {
        SalesProject,
    },
};
</script>


<style>
#app {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

* {
    font-family: Roboto, Arial, Helvetica, sans-serif;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>

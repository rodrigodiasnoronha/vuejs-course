<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <ApplyCSS test="my message" />
    </div>
</template>

<script>
// import Binding from "./components/Binding";
// import Training from "./components/Training";
// import Events from "./components/Events";
// import ConditionalAndRepeat from "./components/ConditionalAndRepeat";
import ApplyCSS from "./components/ApplyCSS";

export default {
    name: "App",
    el: "App",
    components: {
        ApplyCSS,
    },
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

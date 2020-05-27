<template>
  <div>
    <h2>{{title}}</h2>
    <a :href="link" target="__blank">Twitter</a>

    <br />

    <input type="text" v-model="name" />
    <h4>{{name}}</h4>
  </div>
</template>


<script>
export default {
  name: "Binding",
  data: () => ({
    title: "Working with Binding",
    link: "https://twitter.com/roketman09",
    name: ""
  }),
  methods: {},
  watch: {
    // Executa alguma coisa sempre que o estado de um componente mudar
    name(newName) {
      console.log(newName);
    }
  }
};
</script>


<style scoped>
</style>
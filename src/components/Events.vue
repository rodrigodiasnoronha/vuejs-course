<template>
  <div>
    <h2>{{title}}</h2>

    <h4>Contador: {{contador}}</h4>

    <button v-on:click="increment">Increment</button>
    <button v-on:click="decrement">Decrement</button>

    <br />

    <input type="text" v-model="username" />

    <button type="button" v-on:click="onSearch">Search</button>

    <br />

    <div v-if="user !== null">
      <h4>Name: {{user.name}}</h4>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Events",
  data: () => ({
    title: "Working with Events",
    contador: 0,
    x: 0,
    y: 0,
    username: "",
    user: null
  }),
  methods: {
    increment() {
      this.contador++;
    },
    decrement() {
      if (this.contador > 0) {
        this.contador--;
      }
    },
    async onSearch() {
      try {
        const { data } = await axios.get(
          `https://api.github.com/users/${this.username}`
        );

        this.user = data;
      } catch (err) {
        this.user = null;
        alert("Ocorreu um erro");
      }
    }
  }
};
</script>

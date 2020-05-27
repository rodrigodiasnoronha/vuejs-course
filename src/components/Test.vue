<template>
  <div>
    <h1>Hello, World</h1>

    <h2>{{2 + 2}}</h2>
    <h2>{{"test".toUpperCase()}}</h2>

    <h4>Product info</h4>
    <ul>
      <li>Name: {{name}}</li>
      <li>Price: R${{price}}</li>
      <li>Discount: {{discount}}%</li>
      <li>Total: {{total}}</li>
      <li>{{currentTime()}}</li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "Test",
  data: () => ({
    // Variáveis que podem ser acessadas no template
    name: "Caneta",
    price: 6.99,
    discount: 0.15
  }),
  methods: {
    // são os métodos do componente, tipo os que ficam dentro do Componente no React
    currentTime: () => new Date().toLocaleString()
  },
  computed: {
    // Funççoes que podem usar propriedades do data do Vue
    total: () => (this.price - this.price * this.discount).toFixed(2)
  }
};
</script>
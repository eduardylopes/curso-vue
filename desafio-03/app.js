new Vue({
  el: '#desafio',
  data: {
    valor: 0,
  },
  computed: {
    resultado() {
      return this.valor === 37 ? 'Valor Igual' : 'Valor Diferente';
      //   O return abaixo foi um teste para verificar se o método estava sendo chamado sem estar monitorando uma variável.
      //   return Math.round(Math.random() * this.valor);
    },
  },
  watch: {
    // valor() {
    //   setTimeout(() => {
    //     this.valor = 0;
    //   }, 5000);
    // },
    // Também é possível monitorar um método computado de acordo com o código abaixo.
    resultado() {
      setTimeout(() => {
        this.valor = 0;
      }, 5000);
    },
  },
});

new Vue({
  el: '#desafio',
  data: {
    valor: '',
  },
  methods: {
    exibirAlerta() {
      alert('O alerta foi exibido em tela');
    },
    armazenarValor(event) {
      this.valor = event.target.value;
    },
  },
});

new Vue({
  el: '#desafio',
  data: {
    efeito: null,
    intervalId: null,
    classeEscolhida3: null,
    classeEscolhida4: null,
    classeEscolhida5: null,
    aplicarClasse: 'false',
    barraDeProgresso: 0,
    progressoId: null,
  },
  computed: {
    aplicarClasseComputed() {
      return this.aplicarClasse === 'true' ? this.classeEscolhida4 : null;
    },
    estilo5() {
      if (this.classeEscolhida5 === 'classeX') {
        return {
          backgroundColor: 'yellow',
          height: 100 + 'px',
          width: 100 + 'px',
        };
      }

      if (this.classeEscolhida5 === 'classeY') {
        return {
          backgroundColor: 'blue',
          height: 100 + 'px',
          width: 200 + 'px',
        };
      }
    },
  },
  methods: {
    iniciarEfeito() {
      this.intervalId = setInterval(() => {
        this.efeito = this.efeito === 'destaque' ? 'encolher' : 'destaque';
      }, 500);
    },
    pararEfeito() {
      clearInterval(this.intervalId);
      this.efeito = null;
    },
    iniciarProgresso() {
      this.barraDeProgresso = 0;

      this.progressoId = setInterval(() => {
        this.barraDeProgresso += 1;

        if (this.barraDeProgresso === 100) {
          console.log('Interval cleared!');
        }
      }, 15);
    },
  },
});

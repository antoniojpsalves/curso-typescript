import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";


const controller = new NegociacaoController();


// Trazendo o formulário
const form =  document.querySelector('.form');
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    controller.adicionar();
});
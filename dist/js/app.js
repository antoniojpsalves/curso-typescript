import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
// Trazendo o formulário
const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    controller.adicionar();
});

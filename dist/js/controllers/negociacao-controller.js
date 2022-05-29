import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes(); //quando estou atribuindo não preciso definir o type
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adicionar() {
        const negociacao = this.criaNegociacao();
        //adicionando a lista de negociacoes a negociacao criada
        this.negociacoes.adiciona(negociacao);
        console.log('Negociações criadas: ', this.negociacoes.listarNegociacoes());
        this.limparFormulario();
    }
    criaNegociacao() {
        return new Negociacao(this.inputData.valueAsDate, this.inputQuantidade.valueAsNumber, this.inputValor.valueAsNumber);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}

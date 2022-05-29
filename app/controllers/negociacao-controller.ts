import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes(); //quando estou atribuindo não preciso definir o type

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adicionar(): void {
        const negociacao = this.criaNegociacao();
        //adicionando a lista de negociacoes a negociacao criada
        this.negociacoes.adiciona(negociacao);
        console.log('Negociações criadas: ', this.negociacoes.listarNegociacoes());
        this.limparFormulario();
    }

    criaNegociacao(): Negociacao {
        return new Negociacao(
            this.inputData.valueAsDate,
            this.inputQuantidade.valueAsNumber, 
            this.inputValor.valueAsNumber
            );
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
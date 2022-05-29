import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes(); //quando estou atribuindo não preciso definir o type
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adicionar() {
        const negociacao = this.criaNegociacao();
        //adicionando a lista de negociacoes a negociacao criada
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
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

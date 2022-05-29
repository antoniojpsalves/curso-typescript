import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];
    

    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    listarNegociacoes(): ReadonlyArray<Negociacao> {
        /**
         * Modificando para retornar um novo array.
         * Estava passando por referencia e poderia alterar o valor da lista original
         * Solucionei passando com spread operator, mas o typescript tem um tipo especial
         */
        return this.negociacoes;
    }
}
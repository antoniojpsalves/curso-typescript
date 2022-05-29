export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    listarNegociacoes() {
        /**
         * Modificando para retornar um novo array.
         * Estava passando por referencia e poderia alterar o valor da lista original
         * Solucionei passando com spread operator, mas o typescript tem um tipo especial
         */
        return this.negociacoes;
    }
}

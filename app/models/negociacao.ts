export class Negociacao {

    constructor(
        private _data: Date, 
        private _quantidade: number, 
        private _valor: number
    ) {}

    get data(): Date {
        /**
         * Dava pra manipular a data utilizando métodos de setDate()
         * Retornando uma nova referência "identica" defendemos a alteração do nosso registro
         */
        const data = new Date(this._data.getTime());

        return data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }
    //setters?
}
class Negociacao {

    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime()); // atributos de uma classe
        this._quantidade = quantidade; // o this aponta para a instância sendo executada no momento 
        this._valor = valor;
        Object.freeze(this);
    }

    get volume() { // método acessador. Dentro da classe ele pode acessar os atributos, mas fora dela não, além disso, não vai ser permitido atribuir nada fora da classe
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}
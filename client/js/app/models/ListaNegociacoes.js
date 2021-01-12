class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        this._armadilha(this);
    }

    get negociacoes() {
        // deixaremos apenas para visualização
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
    }
}
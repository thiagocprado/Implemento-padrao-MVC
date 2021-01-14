class Bind {

    constructor(model, view, ...props) { // rest operator, vai transformar os parâmetros em um array e adicionar ao props
        let proxy = ProxyFactory.create(model, props, model =>
            view.update(model)
        );

        view.update(model);

        return proxy;
    }
}
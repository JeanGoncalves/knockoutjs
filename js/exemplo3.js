function myViewModel() {
    this.produtos = ['Maça','Banana','Pêra','Laranja'];
    this.produtosSelecionados = ko.observableArray(['Banana']);
    this.selecionaTodos = ko.pureComputed({
        read: function() {
            return this.produtosSelecionados().length === this.produtos.length;
        },
        write: function(value) {
            this.produtosSelecionados(value ? this.produtos.slice(0) : []);
        },
        owner: this
    });
}

ko.applyBindings( new myViewModel() );

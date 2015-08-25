var arrMenus = {
    menus:[
            {name: "Exemplo 1", link: "#Exemplo1"},
            {name: "Exemplo 2", link: "#Exemplo2"},
            {name: "Exemplo 3", link: "#Exemplo3"},
            {name: "Exemplo 4", link: "#Exemplo4"}
        ]};

// ko.applyBindings(arrMenus);

var myViewModel = {
    // Exemplo 1
    desc1: "Carregando dados e mostrando NOVO NOME no alert.", 
    personName1: ko.observable('Jean'),
    personAge1: ko.observable(25),

    // Exemplo 2
    desc2: "Carregando dados e mostrando NOME ANTERIOR no alert.", 
    personName2: ko.observable('Jean Gonçalves'),
    personAge2: ko.observable(20),

    // Exemplo 3
    desc3: "Carregando dados e mostrando NOME FIXO no alert.", 
    personName3: ko.observable('Jean'),
    personAge3: ko.observable(20),

    // Exemplo 4
    desc4: "Carregando dados e limitando os caracteres do nome para 20.", 
    personName4: ko.observable('Jean'),
    personAge4: ko.observable(20)
};

ko.applyBindings(myViewModel,arrMenus);


///////////////////////////////////////////
//              EXEMPLO 1                //
///////////////////////////////////////////
myViewModel.personName1.subscribe(function(newValue) {
    alert('Novo nome é '+ newValue);
});


///////////////////////////////////////////
//              EXEMPLO 2                //
///////////////////////////////////////////
myViewModel.personName2.subscribe(function(newValue2) {
    alert('Nome anterior '+ newValue2);
},null,"beforeChange");

///////////////////////////////////////////
//              EXEMPLO 3                //
///////////////////////////////////////////
myViewModel.personName3.subscribe(function(newValue3) {
    alert('Nome fixo '+ newValue3);
    subscribe.dispose();
},null,"beforeChange");

///////////////////////////////////////////
//              EXEMPLO 4                //
///////////////////////////////////////////
myViewModel.personName4.extend({ rateLimit: 20 });


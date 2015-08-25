var myViewModel = {
    personName: ko.observable('Jean'),
    personAge: ko.observable(25) 
};

myViewModel.personName.subscribe(function(newValue) {
    alert('O novo nome é '+ newValue);
});

ko.applyBindings(myViewModel);
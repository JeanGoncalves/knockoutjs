function myViewModel() {
    this.firstName = ko.observable('Jean');
    this.lastName = ko.observable('Gonçalves');

    this.fullName = ko.pureComputed({
        read: function() {
            return this.firstName() + " " + this.lastName();
        },
        write: function(value) {
            var lastSpacePos = value.lastIndexOf(" ");
            if(lastSpacePos > 0) {
                this.firstName(value.substring(0, lastSpacePos));
                this.lastName(value.substring(lastSpacePos + 1));
            }
        },
        owner: this
    });
}

ko.applyBindings( new myViewModel() );

System.register([], function(exports_1) {
    var Contact;
    return {
        setters:[],
        execute: function() {
            Contact = (function () {
                function Contact(_id, firstname, lastname, category, phone, city, country) {
                    this._id = _id;
                    this.firstname = firstname;
                    this.lastname = lastname;
                    this.category = category;
                    this.phone = phone;
                    this.city = city;
                    this.country = country;
                }
                return Contact;
            })();
            exports_1("Contact", Contact);
        }
    }
});
//# sourceMappingURL=contact.js.map
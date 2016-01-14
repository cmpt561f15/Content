System.register([], function(exports_1) {
    var Country;
    return {
        setters:[],
        execute: function() {
            Country = (function () {
                function Country(_id, country, cities) {
                    this._id = _id;
                    this.country = country;
                    this.cities = cities;
                }
                return Country;
            })();
            exports_1("Country", Country);
        }
    }
});
//# sourceMappingURL=country.js.map
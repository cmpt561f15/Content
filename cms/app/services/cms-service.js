System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', "angular2/http"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, http_2;
    var CmsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (http_2_1) {
                http_2 = http_2_1;
            }],
        execute: function() {
            CmsService = (function () {
                function CmsService(http) {
                    this.http = http;
                    this.baseUrl = 'http://localhost:9080/api/cms';
                }
                CmsService.prototype.fetchContacts = function () {
                    return this.http.get(this.baseUrl + '/contacts').map(function (response) { return response.json(); });
                };
                CmsService.prototype.fetchCountries = function () {
                    return this.http.get(this.baseUrl + '/countries').map(function (response) { return response.json(); });
                };
                CmsService.prototype.fetchContactCategories = function () {
                    return this.http.get(this.baseUrl + '/contactcategories').map(function (response) { return response.json(); });
                };
                CmsService.prototype.find = function (id) {
                    return this.contacts.filter(function (c) { return c._id == id; })[0];
                };
                CmsService.prototype.remove = function (contact) {
                    var _this = this;
                    console.log("Contact to be deleted", JSON.stringify(contact));
                    var headers = new http_2.Headers();
                    headers.append('Content-Type', 'application/json');
                    this.http.delete(this.baseUrl + "/contacts/" + contact._id)
                        .subscribe(function (response) {
                        console.log('Delete done sucessfully');
                        var index = _this.contacts.indexOf(contact);
                        _this.contacts.splice(index, 1);
                    });
                };
                CmsService.prototype.update = function (contact) {
                    console.log("Contact to be updated", JSON.stringify(contact));
                    var headers = new http_2.Headers();
                    headers.append('Content-Type', 'application/json');
                    this.http.put(this.baseUrl + "/contacts/" + contact._id, JSON.stringify(contact), { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (updatedContact) {
                        console.log("updatedHero", updatedContact);
                    });
                };
                CmsService.prototype.add = function (contact) {
                    var _this = this;
                    delete contact._id;
                    console.log("Contact to add", JSON.stringify(contact));
                    var headers = new http_2.Headers();
                    headers.append('Content-Type', 'application/json');
                    this.http.post(this.baseUrl + '/contacts', JSON.stringify(contact), { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (addedContact) {
                        _this.contacts.push(addedContact);
                        console.log("addedContact", addedContact);
                    });
                };
                CmsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CmsService);
                return CmsService;
            })();
            exports_1("default", CmsService);
        }
    }
});
//# sourceMappingURL=cms-service.js.map
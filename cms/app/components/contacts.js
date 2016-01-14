System.register(['angular2/core', 'angular2/common', 'angular2/router', '../services/cms-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, cms_service_1;
    var Contacts;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (cms_service_1_1) {
                cms_service_1 = cms_service_1_1;
            }],
        execute: function() {
            Contacts = (function () {
                function Contacts(cmsService, router) {
                    this.cmsService = cmsService;
                    this.router = router;
                }
                //auto-executed during the component initialization
                Contacts.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log("in On Init");
                    //If the heroes list is undefined then fetch the data from REST service
                    if (!this.cmsService.contacts) {
                        //After getting the heros -> get their quotes
                        //This is a demo of two async calls done in sequence
                        console.log("Contacts not found.. Fetchingg");
                        this.cmsService.fetchContacts().subscribe(function (contacts) {
                            _this.cmsService.contacts = contacts;
                        }, function (err) { return console.error('There was an error getting contacts: ' + err); }, function () { return console.log('Completed!'); });
                    }
                    if (!this.cmsService.countries) {
                        this.cmsService.fetchCountries().subscribe(function (countries) {
                            _this.cmsService.countries = countries;
                        }, function (err) { return console.error('There was an error: ' + err); }, function () { return console.log('Completed!'); });
                    }
                    if (!this.cmsService.contactCategories) {
                        this.cmsService.fetchContactCategories().subscribe(function (contactCategories) {
                            _this.cmsService.contactCategories = contactCategories;
                            console.log('format of category', _this.cmsService.contactCategories);
                        }, function (err) { return console.error('There was an error: ' + err); }, function () { return console.log('Completed!'); });
                    }
                };
                Contacts.prototype.add = function () {
                    this.router.navigate(['/Add']);
                    return false;
                };
                Contacts.prototype.remove = function (contact) {
                    if (confirm("Confirm delete?")) {
                        this.cmsService.remove(contact);
                    }
                    return false;
                };
                Contacts = __decorate([
                    core_1.Component({
                        selector: 'contact',
                        templateUrl: 'app/components/contact-list.html',
                        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [cms_service_1.default, router_1.Router])
                ], Contacts);
                return Contacts;
            })();
            exports_1("Contacts", Contacts);
        }
    }
});
//# sourceMappingURL=contacts.js.map
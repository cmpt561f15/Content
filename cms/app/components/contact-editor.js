System.register(['angular2/core', 'angular2/common', 'angular2/router', '../services/cms-service', "../models/contact"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, cms_service_1, contact_1;
    var ContactEditor;
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
            },
            function (contact_1_1) {
                contact_1 = contact_1_1;
            }],
        execute: function() {
            ContactEditor = (function () {
                function ContactEditor(cmsService, router, params) {
                    this.cmsService = cmsService;
                    this.router = router;
                    console.log('params.get("id") : ', params.get('id'));
                    if (params.get('id') != null) {
                        this.contact = cmsService.find(params.get('id'));
                        this.onCountryChanged(this.contact.country);
                    }
                    else {
                        this.contact = new contact_1.Contact('', '', '', '', '', '', '');
                    }
                }
                ContactEditor.prototype.onSubmit = function () {
                    if (this.contact._id === '') {
                        this.cmsService.add(this.contact);
                    }
                    else {
                        this.cmsService.update(this.contact);
                    }
                    this.router.navigate(['/Contacts']);
                };
                ContactEditor.prototype.onCountryChanged = function (selectedCountry) {
                    console.log("selectedCountry : " + selectedCountry);
                    this.cities = this.cmsService.countries.filter(function (c) { return c.country == selectedCountry; }).map(function (c) { return c.cities; })[0];
                    console.log(this.cities);
                };
                ContactEditor = __decorate([
                    core_1.Component({
                        selector: 'contact-form',
                        templateUrl: 'app/components/contact-form.html',
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [cms_service_1.default, router_1.Router, router_1.RouteParams])
                ], ContactEditor);
                return ContactEditor;
            })();
            exports_1("ContactEditor", ContactEditor);
        }
    }
});
//# sourceMappingURL=contact-editor.js.map
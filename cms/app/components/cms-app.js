System.register(['angular2/core', 'angular2/common', 'angular2/router', './contacts', './contact-editor', "../services/cms-service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, contacts_1, contact_editor_1, cms_service_1;
    var CmsApp;
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
            function (contacts_1_1) {
                contacts_1 = contacts_1_1;
            },
            function (contact_editor_1_1) {
                contact_editor_1 = contact_editor_1_1;
            },
            function (cms_service_1_1) {
                cms_service_1 = cms_service_1_1;
            }],
        execute: function() {
            CmsApp = (function () {
                function CmsApp(cmsService, router) {
                    this.cmsService = cmsService;
                    this.router = router;
                    this.title = 'CMS App';
                }
                CmsApp = __decorate([
                    router_1.RouteConfig([
                        { path: '/', component: contacts_1.Contacts, as: 'Contacts' },
                        { path: '/add', component: contact_editor_1.ContactEditor, as: 'Add' },
                        { path: '/edit/:id', component: contact_editor_1.ContactEditor, as: 'Edit' }
                    ]),
                    core_1.Component({
                        selector: 'cms-app',
                        template: "\n               <h1>{{title}}</h1>\n               <router-outlet></router-outlet>\n               ",
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [cms_service_1.default, router_1.Router])
                ], CmsApp);
                return CmsApp;
            })();
            exports_1("CmsApp", CmsApp);
        }
    }
});
//# sourceMappingURL=cms-app.js.map
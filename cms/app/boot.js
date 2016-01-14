System.register(['angular2/core', 'angular2/platform/browser', 'angular2/router', 'angular2/http', './components/cms-app', './services/cms-service'], function(exports_1) {
    var core_1, browser_1, router_1, http_1, cms_app_1, cms_service_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (cms_app_1_1) {
                cms_app_1 = cms_app_1_1;
            },
            function (cms_service_1_1) {
                cms_service_1 = cms_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(cms_app_1.CmsApp, [
                cms_service_1.default,
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map
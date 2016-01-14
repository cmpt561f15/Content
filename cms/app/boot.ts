import {Component, provide} from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import {
    ROUTER_PROVIDERS,
    LocationStrategy,
    HashLocationStrategy
} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {CmsApp} from './components/cms-app';
import CmsService from './services/cms-service';

bootstrap(CmsApp,
    [
        CmsService,
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy})
    ]);
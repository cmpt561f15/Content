import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {
    RouteConfig,  ROUTER_DIRECTIVES, Router,
    LocationStrategy, HashLocationStrategy
} from 'angular2/router';
import {Contacts} from './contacts';
import {ContactEditor} from './contact-editor';
import CmsService from "../services/cms-service";

@RouteConfig([
    {path: '/',  component: Contacts, as: 'Contacts'},
    {path: '/add', component: ContactEditor, as: 'Add'  },
    {path: '/edit/:id', component: ContactEditor, as: 'Edit'  }
])

@Component({
    selector: 'cms-app',
    template: `
               <h1>{{title}}</h1>
               <router-outlet></router-outlet>
               `,
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES]
})
export class CmsApp {
    title = 'CMS App';

    constructor(public cmsService: CmsService, public router : Router) {
    }
}
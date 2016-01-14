import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import CmsService from '../services/cms-service';
import {Contact} from "../models/contact";

@Component({
    selector: 'contact-form',
    templateUrl: 'app/components/contact-form.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class ContactEditor {
    contact: Contact;
    cities: string[];

    constructor(public cmsService: CmsService, public router: Router, params: RouteParams) {
        console.log('params.get("id") : ', params.get('id'));
        if (params.get('id') != null) {
            this.contact = cmsService.find(params.get('id'));
            this.onCountryChanged(this.contact.country);
        } else {
            this.contact = new Contact('', '', '', '', '', '', '');
        }
    }

    onSubmit() {
        if (this.contact._id === '') {
            this.cmsService.add(this.contact);
        } else {
            this.cmsService.update(this.contact);
        }
        this.router.navigate(['/Contacts']);
    }

    onCountryChanged(selectedCountry) {
        console.log(`selectedCountry : ${selectedCountry}`);
        this.cities = this.cmsService.countries.filter(c => c.country == selectedCountry).map(c => c.cities)[0];
        console.log(this.cities);
    }
}
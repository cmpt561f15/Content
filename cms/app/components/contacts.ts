import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams, Router} from 'angular2/router';
import CmsService from '../services/cms-service';
import {Contact} from "../models/contact";
import {Country} from "../models/country";
import {ContactCategory} from "../models/contactCategory";

@Component({
    selector: 'contact',
    templateUrl: 'app/components/contact-list.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class Contacts {

    constructor(public cmsService: CmsService, public router : Router) {
    }

    //auto-executed during the component initialization
    ngOnInit() {
        console.log("in On Init");
        //If the heroes list is undefined then fetch the data from REST service
        if (!this.cmsService.contacts) {
            //After getting the heros -> get their quotes
            //This is a demo of two async calls done in sequence
            console.log("Contacts not found.. Fetchingg");
            this.cmsService.fetchContacts().subscribe(
                (contacts:Contact[]) => {
                    this.cmsService.contacts = contacts;
                },
                (err) => console.error('There was an error getting contacts: ' + err),
                () => console.log('Completed!')
            );
        }
        if (!this.cmsService.countries) {
            this.cmsService.fetchCountries().subscribe(
                (countries:Country[]) => {
                    this.cmsService.countries = countries;
                },
                (err) => console.error('There was an error: ' + err),
                () => console.log('Completed!')
            );
        }
        if (!this.cmsService.contactCategories) {
            this.cmsService.fetchContactCategories().subscribe(
                (contactCategories:ContactCategory[]) => {
                    this.cmsService.contactCategories = contactCategories;
                    console.log('format of category', this.cmsService.contactCategories);
                },
                (err) => console.error('There was an error: ' + err),
                () => console.log('Completed!')
            );
        }
    }

    add() {
        this.router.navigate(['/Add']);
        return false;
    }

    remove(contact: Contact) {
        if (confirm("Confirm delete?")) {
            this.cmsService.remove(contact);
        }
        return false;
    }
}
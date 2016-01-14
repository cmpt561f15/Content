import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Headers} from "angular2/http";
import {Contact} from "../models/contact";
import {Country} from "../models/country";
import {ContactCategory} from "../models/contactCategory";
import {concat} from "rxjs/operator/concat-static";

@Injectable()
export default class CmsService {
    baseUrl:string;
    contactCategories:ContactCategory[];
    countries:Country[];
    contacts:Contact[];

    constructor(public http:Http) {
        this.baseUrl = 'http://localhost:9080/api/cms';
    }

    fetchContacts():Observable<Contact[]> {
        return this.http.get(this.baseUrl + '/contacts').map(response => response.json());
    }

    fetchCountries():Observable<Country[]> {
        return this.http.get(this.baseUrl + '/countries').map(response => response.json());
    }

    fetchContactCategories():Observable<Country[]> {
        return this.http.get(this.baseUrl + '/contactcategories').map(response => response.json());
    }

    find(id:string):Contact {
        return this.contacts.filter(c => c._id == id)[0];
    }

    remove(contact:Contact) {
        console.log("Contact to be deleted", JSON.stringify(contact));
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.delete(`${this.baseUrl}/contacts/${contact._id}`)
            .subscribe(
                (response:Response) => {
                    console.log('Delete done sucessfully');
                    let index = this.contacts.indexOf(contact);
                    this.contacts.splice(index, 1);
                });
    }

    update(contact:Contact) {
        console.log("Contact to be updated", JSON.stringify(contact));
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.put(`${this.baseUrl}/contacts/${contact._id}`,
            JSON.stringify(contact),
            {headers: headers})
            .map((res:Response) => res.json())
            .subscribe(
                (updatedContact:Contact) => {
                    console.log("updatedHero", updatedContact);
                });
    }

    add(contact:Contact) {
        delete contact._id;
        console.log("Contact to add", JSON.stringify(contact));
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post(this.baseUrl + '/contacts',
            JSON.stringify(contact),
            {headers: headers})
            .map((res:Response) => res.json())
            .subscribe(
                (addedContact:Contact) => {
                    this.contacts.push(addedContact);
                    console.log("addedContact", addedContact);
                });
    }
}
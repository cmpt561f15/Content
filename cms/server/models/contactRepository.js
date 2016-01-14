"use strict";
class ContactRepository {

    constructor() {
        this.fs        = require('fs');
        this.Contact = require('./contactModel');
        this.Country = require('./countryModel');
        this.ContactCategory = require('./contactCategoryModel');
    }

    emptyDB() {
        this.Contact.collection.remove();
        this.ContactCategory.collection.remove();
        this.Country.collection.remove();
    }

    initDb () {
        //this.emptyDB();
        this.Contact.collection.count((err, count) => {
            console.log(`Contacts count: ${count}`);
            //if database collection is empty then read json files and store them in monogdb
            if (!err && count === 0) {
                this.fs.readFile('./server/data/contact.json', 'utf8', (err, data) => {
                    if (err) throw err;
                    this.Contact.collection.insert(JSON.parse(data), (err, data) => {
                        console.log("Contact data stored in mongodb successfully");
                    })
                });
            }
        });

        this.Country.collection.count((err, count) => {
            //if database collection is empty then read json files and store them in monogdb
            if (!err && count === 0) {
                this.fs.readFile('./server/data/country.json', 'utf8', (err, data) => {
                    if (err) throw err;
                    this.Country.collection.insert(JSON.parse(data), (err, data) => {
                        console.log("Country data stored in mongodb successfully");
                    })
                });
            }
        });

        this.ContactCategory.collection.count((err, count) => {
            //if database collection is empty then read json files and store them in monogdb
            if (!err && count === 0) {
                this.fs.readFile('./server/data/contactCategory.json', 'utf8', (err, data) => {
                    if (err) throw err;
                    this.ContactCategory.collection.insert(JSON.parse(data), (err, data) => {
                        console.log("ContactCategory data stored in mongodb successfully");
                    })
                });
            }
        });
    }
}

module.exports = new ContactRepository();
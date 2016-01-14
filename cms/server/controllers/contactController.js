"use strict";
class ContactController {
    constructor() {
        this.Contact = require('../models/contactModel');
        this.Country = require('../models/countryModel');
        this.ContactCategory = require('../models/contactCategoryModel');
    }
    getContactsByCategory(req, res){
        let query = this.Contact.find();
        console.log("getContacts.req.query.programs: ", req.query.category);
        if(req.query.category) {
            query.where({category: {$in: req.query.category.split(",")}});
        }

        query.exec(function (err, contacts) {
            if (err)
                res.status(500).send(err);
            else{
                res.json(contacts);
            }
        });
    }

    getContactById(req, res){
        //let query = this.Contact.find();
        console.log("Id PAram",req.params.id);
        var ObjectId = require('mongoose').Types.ObjectId;

        if(req.params.id) {
            //console.log(this.Contact);
            this.Contact.findOne({_id: req.params.id }).exec(function (err, contact) {
                console.log(contact);
                if (err)
                    res.status(500).send(err);
                else{
                    res.json(contact);
                }
            });
        }
    }

    getContact(req, res, next){
        //let query = this.Contact.find();
        console.log("Id PAram",req.params.id);
        var ObjectId = require('mongoose').Types.ObjectId;

        if(req.params.id) {
            //console.log(this.Contact);
            this.Contact.findOne({_id: req.params.id }).exec(function (err, contact) {
                console.log(contact);
                if (err)
                    res.status(500).send(err);
                else{
                    req.contact = contact;
                    next();
                }
            });
        }
    }

    getCountries(req, res){
        let query = this.Country.find();

        query.exec(function (err, countries) {
            if (err)
                res.status(500).send(err);
            else{
                res.json(countries);
            }
        });
    }

    getContactCategory(req, res){
        let query = this.ContactCategory.find();

        query.exec(function (err, countries) {
            if (err)
                res.status(500).send(err);
            else{
                res.json(countries);
            }
        });
    }

    deleteContact (req, res){
        req.contact.remove((err) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(204).send(`contact ${req.contact._id} removed`);
    }
    });
    }

    updateContact (req, res) {
        if (req.body._id) {
            delete req.body._id;
        }
        console.log("Body Testing", req.body);

        console.log("Req Contacts Testing", req.contacts);
        console.log("Req Contacts Testing", req);

        for (let p in req.body) {
            console.log("Req Cotnact P", req.body);
            req.contact[p] = req.body[p];
        }
        req.contact.save((err) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(200).send(`contact ${req.contact._id} updated`);
        }
        });
    }

    addContact (req, res) {
        let contact = new this.Contact(req.body);
        contact.save();
        console.log("contact added", contact);
        res.status(201).send(contact);
    }

}

module.exports = new ContactController();
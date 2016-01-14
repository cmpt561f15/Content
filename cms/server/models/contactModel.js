"use strict";

let mongoose = require('mongoose');

let ContactSchema = new mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    category: {type: String},
    phone: {type: String},
    city: {type: String},
    country: {type: String}

});

module.exports = mongoose.model('Contact', ContactSchema);


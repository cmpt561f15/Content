"use strict";

let mongoose = require('mongoose');

let CountrySchema = new mongoose.Schema({
    country: {type: String},
    cities: {type: [String]}

});

module.exports = mongoose.model('Country', CountrySchema);

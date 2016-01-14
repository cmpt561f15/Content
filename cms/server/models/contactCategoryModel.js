"use strict";

let mongoose = require('mongoose');

let ContactCategorySchema = new mongoose.Schema({
    contactCategory: {type: [String]}
});

module.exports = mongoose.model('ContactCategory', ContactCategorySchema);

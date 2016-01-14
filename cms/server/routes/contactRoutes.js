"use strict";
let express = require('express');
let cmsController = require('../controllers/contactController');

let cmsRouter = express.Router();

cmsRouter.route('/countries')
    .get((req, res) => cmsController.getCountries(req, res));

cmsRouter.route('/contactcategories')
    .get((req, res) => cmsController.getContactCategory(req, res));

cmsRouter.route('/contacts')
    .get((req, res) => cmsController.getContactsByCategory(req, res));

cmsRouter.use('/contacts/:id', (req, res, next) => cmsController.getContact(req, res, next));
cmsRouter.route('/contacts/:id')
    .get((req, res) => cmsController.getContactById(req, res))
    .put((req, res) => cmsController.updateContact(req, res))
    .delete((req, res) => cmsController.deleteContact(req, res));
cmsRouter.post('/contacts', (req, res) => cmsController.addContact(req, res));

module.exports = cmsRouter;
"use strict";

let express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    open = require('open');

mongoose.Promise = global.Promise;

let dbConnection = mongoose.connect('mongodb://localhost/cms', function(err) {
    if(!err) {
        let contactRepository = require('./server/models/contactRepository');
        contactRepository.initDb();
    }
});

let app = express();
//Allow serving static files
app.use(express.static(__dirname));

let port = process.env.PORT || 9080;

app.use(bodyParser.urlencoded({extended:true}));
//aut-deserialize the body of incoming request to a json object
app.use(bodyParser.json());

let contactRouter = require('./server/routes/contactRoutes');
app.use('/api/cms', contactRouter);

app.listen(port, function(){
    console.log('Contact Management System (CMS) App is available @ http://localhost:' + port);
});
var fs = require('fs');

function saveDBF(rows) {
    "use strict";
    exports.__esModule = true;
    var dbffile_1 = require("dbffile");

    dbffile_1.DBFFile.create('my.dbf', [
            { name: 'account', type: 'C', size: 255 },
            { name: 'amount', type: 'B', size: 8 },
        ])
        .then(function(dbf) {
            console.log('DBF file created.');
            dbf.appendRecords(rows);
        })
        .then(function(dbf) {
            console.log(rows.length + ' rows added.');
            return dbffile_1.DBFFile.open('my.dbf');
        })
        .then(function(dbf) {
            console.log('DBF file contains ' + dbf.recordCount + ' rows.');
            console.log('Field names: ' + dbf.fields.map(function(f) { return f.name; }).join(', '));
            return dbf.readRecords(100);
        })["catch"](function(err) {
            console.log('An error occurred: ' + err);
        });
}

// import express (after npm install express)
const express = require('express');
var bodyParser = require("body-parser");

// create new express app and save it as "app"
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// server configuration
const PORT = 8080;

// create a route for the app
app.get('/', (req, res) => {
    res.send('Hello World');
});

// 1) Add a route that answers to all request types
app.post('/createDBF', function(req, res) {
    console.log("Datos> ");
    console.log(req.body);
    var jsondata = req.body;
    fs.exists('my.dbf', function(exists) {
        if (exists) {
            console.log('File exists. Deleting now ...');
            fs.unlink('my.dbf', function(err) {
                if (err) return console.log(err);
                console.log('file deleted successfully');
                saveDBF(jsondata);
            });
        } else {
            console.log('File not found, so not deleting.');
            saveDBF(jsondata);
        }
    });


    res.send({ status: "Ok" });
    res.end();
});


// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

// make the server listen to requests
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});
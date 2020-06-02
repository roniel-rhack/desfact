var fs = require("fs");
var path = require("path");

var now = new Date();
var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var year = now.getFullYear();
var today = day + "-" + month + "-" + year;
console.log(today);

var ruta = path.join(process.env["HOME"], "Desktop");

if (fs.existsSync(ruta)) {
  ruta += "/" + "desglose_" + today + ".dbf";
} else {
  ruta =
    path.join(process.env["HOME"], "Escritorio") +
    "/" +
    "desglose_" +
    today +
    ".dbf";
}

function saveDBF(rows) {
  "use strict";
  exports.__esModule = true;
  var dbffile_1 = require("dbffile");

  dbffile_1.DBFFile.create(ruta, [
    {name: "IMP_CARGO", type: "B", size: 8, decimalPlaces: 2},
    {name: "CUENTA", type: "C", size: 14},
    {name: "CONTAB_BAN", type: "L", size: 1},
    {name: "PENDIENTE", type: "B", size: 8, decimalPlaces: 2},
  ])
    .then(function (dbf) {
      console.log(`DBF file ${ruta} created.`);
      dbf.appendRecords(rows);
    })
    .then(function (dbf) {
      console.log(rows.length + " rows added.");
    })
    ["catch"](function (err) {
      console.log("An error occurred: " + err);
    });
}

async function readDBF(ruta) {
  var dbffile_1 = require("dbffile");
  let dbf = await dbffile_1.DBFFile.open(ruta);
  console.log(`File ${ruta} opened.`);
  console.log(`DBF contains ${dbf.recordCount} records`);
  console.log(`Fields names: ${dbf.fields.map((f) => f.name).join(", ")}`);
  let records = await dbf.readRecords(100);
  var jsonResult = [];
  for (let record of records) {
    jsonResult.push({
      IMP_CARGO: parseFloat(record.IMP_CARGO),
      CUENTA: record.CUENTA,
      CONTAB_BAN: record.CONTAB_BAN,
      PENDIENTE: record.PENDIENTE == null ? 0 : record.PENDIENTE
    });
    //console.log('aqui', parseFloat(record.IMP_CARGO));
  }
  var jsonData = JSON.stringify(jsonResult);
  //console.log("json:", jsonData);
  return jsonData;
}

// import express (after npm install express)
const express = require("express");
var bodyParser = require("body-parser");

// create new express app and save it as "app"
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// server configuration
const PORT = 3132;

// create a route for the app
app.get("/", (req, res) => {
  res.send("DesFact Api");
});

app.post("/readDBF", function (req, res) {
  var ruta = req.body.ruta;
  readDBF(ruta).then((value) => {
    res.send(value);
    res.end();
  });
});

// 1) Crea el DBF segun los datos que envia el visual
app.post("/createDBF", function (req, res) {
  var jsondata = req.body;
  fs.exists(ruta, function (exists) {
    if (exists) {
      console.log("File exists. Deleting now ...");
      fs.unlink(ruta, function (err) {
        if (err) return console.log(err);
        console.log(`File ${ruta} deleted successfully`);
        saveDBF(jsondata);
      });
    } else {
      saveDBF(jsondata);
    }
  });
  res.send({status: "Ok"});
  res.end();
});

// Change the 404 message modifing the middleware
app.use(function (req, res, next) {
  res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});

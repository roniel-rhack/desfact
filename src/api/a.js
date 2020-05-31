var path = require("path");
var dbffile_1 = require("dbffile");

var today = "28-05-2020";
var ruta =
  path.join(process.env["HOME"], "Desktop") +
  "/" +
  "desglose_" +
  today +
  ".dbf";

console.log(ruta);

async function testRead() {
  let dbf = await dbffile_1.DBFFile.open(ruta);
  console.log(`DBF contains ${dbf.recordCount} records`);
  console.log(`Fields names: ${dbf.fields.map((f) => f.name).join(", ")}`);
  let records = await dbf.readRecords(100);
  var jsonData = JSON.stringify(records);
  console.log("json:", jsonData);
  for (let record of records) console.log(records);
}

testRead();

// dbffile_1.DBFFile.open(ruta).then((value) => {
//   value.readRecords().then((records) => {
//     console.log(records[0]);
//   });
// });

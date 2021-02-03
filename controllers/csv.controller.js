var fs = require("fs");
var parse = require("csv-parse");
const User = require("../models/csv.model");

exports.FindAll = (req, res) => {
  User.find({},function(err,data){
    if (err) {
        res.send({ message: err.message });
    } else if(data){
        res.send(data);
    } else {
        res.send("No Data Available");
      }
  })
};

exports.ReadCSV = (req, res) => {
  var parser = parse({ columns: true }, function (err, records) {
    console.log(records);

    for (let i = 0; i < records.length; i++) {
      var user = new User({
        Name: records[i].Name,
        No: records[i].No,
        City: records[i].City,
      });

      user
        .save()
        .then((data) => {})
        .catch((err) => {
          res.status(500).send({
            message: err.message,
          });
        });
    }
    res.send("Success.");
  });

  fs.createReadStream("sample.csv").pipe(parser);
};

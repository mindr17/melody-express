const fs = require("fs");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/handle', (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const flatNumber = req.body.flatNumber;
  console.log(`POST request: name is ${name} and phone is ${phone}, flatNumber is ${flatNumber}`);

  fs.appendFile('db.txt', `POST request: name is ${name} and phone is ${phone}, flatNumber is ${flatNumber}
`, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
});

app.listen(3000, () => {
  console.log("Started on http://localhost:3000");
});
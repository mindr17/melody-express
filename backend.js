const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/handle', (req, res) => {
  console.log(`Body: ${req.body}`);
  console.log(`POST request: ${req}`);
  const name = req.body.name;
  const phone = req.body.phone;
  const flatNumber = req.body.flatNumber;
  console.log(`POST request: name is ${name} and phone is ${phone}, flatNumber is ${flatNumber}`);
});

app.listen(3000, () => {
  console.log("Started on http://localhost:3000");
});



// app.get('/', (req, res) => {
//   res.sendFile(`${__dirname}/index.html`);
// });
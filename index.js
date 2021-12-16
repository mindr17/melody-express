const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const fs = require('fs');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post(`/handle`,(request,response) => {
//code to perform particular action.
//To access POST variable use req.body()methods.
  console.log(request.body);
  fs.writeFile('data/db.txt', 'Hello World!', function (err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
  });  
  console.log(request);
  console.log(request.params);
});

// add router in the Express app.
app.use("/", router);
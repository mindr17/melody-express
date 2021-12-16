const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post(`/handle`,(request,response) => {
  fs.writeFileSync('/tmp/test-sync', 'Hey there!');
console.log(request.body);
});

// add router in the Express app.
app.use("/", router);



// const express = require('express')
// const router = express.Router();
// const app = express()
// const port = 3000

// app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

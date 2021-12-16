const path = require('path');
const express = require('express')
const app = express()

const port = 3030

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
//require is like a #include, taking in the module 'express' and importing it in
const express = require('express')

//module inside nodejs, allows us to work with directories or paths
const { join } = require('path')

const app = express()

//this is where the connections will be made
const port = 3000

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// api

app.use(require('./routes'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
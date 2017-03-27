`use strict`

const express = require('express')
const app = express()
const isodate = require("isodate");
const time = require('time')
let port = process.env.PORT || 8080

//middleware - gets three args
const requestTime = (req, res, next) => {
  req.requestedTime = new time.Date()
  isoTime = req.requestedTime
  next()
}

//routes and routing
app.use(requestTime)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/time', (req, res) => {
  res.send(`Time: ${isoTime}`)
})

app.use((req, res) => {
  res.send("Where do you think you're going?")
})


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

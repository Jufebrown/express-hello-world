`use strict`

const express = require('express')
const app = express()
let port = process.env.PORT || 8080

//middleware - gets three args
const requestTime = (req, res, next) => {
  req.requestedTime = Date.now()
  next()
}

//routes and routing
app.use(express.static(__dirname + '/public'))

app.use(requestTime)

app.get(`/monkeys`, (req, res, next) => {
  console.log('Fetching some monkeys')
  console.log(`This ran at ${req.requestTime}`)
  res.sendFile(__dirname + '/public/monkeys.html')
})

app.get(`/chickens`, (req, res, next) => {
  console.log('looking for chickens')
  res.send(`<h3>No chickens for you</h3><form method="POST"><input type="text"><button type="submit">push</button></form>`)
})

app.post('/chickens', (req, res, next) => {
  console.log('Posting some chickens')
})

app.use((req, res) => {
  res.send("Where do you think you're going? We only have monkeys and chickens here")
})


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

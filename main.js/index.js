var express = require('express')

var app = express()
var consumer = require('../kafkaqueue/kafkaconsumer.js')
app.use(express.json())

const routes = require('../routes/route.js')

routes(app)
app.listen(5500, function() {
    console.log("server started")
})

//consumer()
const request = require("request")
const producer = require("../kafkaqueue/kafkaproducer")
const consumer = require("../kafkaqueue/kafkaconsumer")
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBldGVyIiwicGFzc3dvcmQiOiJwZXRlcjEyMyIsImlhdCI6MTY2MDg4NDk5Mn0.WRcjprhmHB-jWVwQLcBg00iYozf5pbGaxCcCDy0NnR8"
const secret = "AAXXXDD1434343343"
const url = "http://localhost:5000/item/viewitem/" + apikey + "/" + secret
const axios = require('axios')
const posturl = "http://localhost:5000/item/additem"
var getdetails = {
    getitems: function(req, res) {
        request(url, function(err, response, body) {
            //producer(body)
            res.send(body)
        })
    },
    saveitem: function(req, res) {
        axios({ method: 'post', url: posturl, data: req.body }).then((e) => {
            console.log(e.data)
        })
        res.send("item added")
    },
    getNotification: function(req, res) {
        var list = req.body;

        for (let x of list) {
            console.log(x)
        }

        res.send("notification sent")
    }

}

module.exports = getdetails
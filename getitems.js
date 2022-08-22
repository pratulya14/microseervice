const request = require("request")
var axios = require('axios')
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBldGVyIiwicGFzc3dvcmQiOiJwZXRlcjEyMyIsImlhdCI6MTY2MDg4NDk5Mn0.WRcjprhmHB-jWVwQLcBg00iYozf5pbGaxCcCDy0NnR8"
const secret = "AAXXXDD1434343343"
const url = "http://localhost:5000/item/viewitem/" + apikey + "/" + secret

var itemdetails = function() {

    axios({ method: 'get', url: url, responseType: 'json' })
        .then((e) => {
            console.log(e.data)
        })

}

itemdetails()
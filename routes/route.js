const controller = require("../controller/servicecontroller")

module.exports = function(app) {
    app.route('/getitems').get(controller.getitems)
    app.route('/saveitem').post(controller.saveitem)
    app.route("/getnotification").post(controller.getNotification)
}
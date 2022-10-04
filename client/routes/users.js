var express = require('express');
var router = express.Router();

var Client = require('node-rest-client').Client;
var client = new Client();

/* GET users listing. */
router.get('/', function(req, res, next) {

client.get(process.env.SERVERURL, function (data, response) {

    // parsed response body as js object
    console.log(data);
    // raw response
    res.send(`Response from server: ${data['data']}`);
});


});

module.exports = router;

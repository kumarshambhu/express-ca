var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
router.get('/index1', function (req, res, next) {
    res.render('index1', {title: 'Express'});
});
router.get('/index2', function (req, res, next) {
    res.render('index2', {title: 'Express'});
});
router.post('/recaptch', function (req, res, next) {
    if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
        return res.json({"responseCode": 1, "responseDesc": "Please select captcha"});
    }

    var secretKey = "6LdvJSoUAAAAAIZOWhMb8ROE9IiZfgb2GHwqYiU0";
    // req.connection.remoteAddress will provide IP address of connected user.
    var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response="
        + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
    // Hitting GET request to the URL, Google will respond with success or error scenario.
    request(verificationUrl, function (error, response, body) {
        body = JSON.parse(body);
        // Success will be true or false depending upon captcha validation.
        if (body.success !== undefined && !body.success) {
            return res.json({"responseCode": 1, "responseDesc": "Failed captcha verification"});
        }else{
            //update data
            res.json({"responseCode": 0, "responseDesc": "Sucess"});
        }

    });
})
module.exports = router;

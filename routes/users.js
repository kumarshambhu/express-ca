var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/contact1', function(req, res, next) {
    res.render('catalog/contact1', {title: 'Express'});
});

router.get('/contact2', function(req, res, next) {
    res.render('catalog/contact2', {title: 'Express'});
});

router.get('/contact3', function(req, res, next) {
    res.send('respond with a resource');
});


module.exports = router;

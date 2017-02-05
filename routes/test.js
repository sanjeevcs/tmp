var express = require('express');
var router = express.Router();

var pi = require('./circle.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('test', { title: ''});
});

router.post('/', function (req, res) {
    var sum = pi.add(parseInt(req.body.firstnumber), parseInt(req.body.secondnumber));
    res.render('test', { title: 'Sum of Two number:', 'sum': sum });
});
module.exports = router;

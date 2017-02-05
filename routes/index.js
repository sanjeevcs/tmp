var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res) {
    var fullname = req.body.firstName + ' ' + req.body.lastName;
	res.render('index', { title: 'Express','fullname':fullname });
   // res.send(fullname + ' Submitted Successfully!');
});
module.exports = router;

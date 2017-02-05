var express = require('express');
var router = express.Router();
var sql = require('mssql');

/* GET users listing. */
router.get('/', function (req, res, next) {
    var config = {
        user: 'sa',
        password: 'welcome@123',
        host: 'localhost',
        server: 'sanjeev\\sqlexpress',
        database: 'MSTRAINING',
        driver: 'tedious',
        instancename: 'SQLEXPRESS'   
    };
    
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
      
        // query to the database and get the records
        request.query('select * from Employee', function (err, recordset) {

            if (err) console.log(err);

            //console.log(recordset);

            res.render('Employee', { title: 'Employee Detail', 'User': recordset });
        });
    });
});

module.exports = router;
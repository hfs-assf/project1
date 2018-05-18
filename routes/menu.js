const router = require('express').Router();
const con = require('../app/database');

router.get('/', function(req, res){
    con.query('select * from menu', function (err, menu){
        res.json(menu)
    })
})

module.exports = router;
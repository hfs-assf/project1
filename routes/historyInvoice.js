const router = require('express').Router();
const con = require('../App/database');

router.get('/', function(req, res){
    con.query("SELECT * FROM invoice where ?", {
        userId : req.session.userdata.userid
    },
    function(err,rows) {
        res.json(rows)
    })
})


module.exports = router;

const router = require ('express').Router();
const con = require('../app/database');

router.get('/', function(req,res){
    var sql ='Select * from kategori';
    con.query(sql,function(err, rows){
        res.json(rows);
    })
})

router.get('/:id?', function(req, res){
    let sql = '';
    if (req.params.id === undefined) sql = 'select * from kategori'
    else sql = 'select * from kategori where ?'
    con.query(sql, {
        id : req.params.id,
    }, function(err,rows) {
        res.json(rows) 
    });
})


module.exports = router;
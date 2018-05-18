const router = require('express').Router();
const con = require('../app/database');

router.post('/create/:id?', function(req, res){
    con.query("insert into menu set ?", {
        idKategori : req.params.id,
        nama: req.body.nama,
        harga: req.body.harga,
        deskripsi : req.body.deskripsi,
    });
    res.json(req.body)
})

router.get('/read/:id?', function(req, res){
    con.query('select * from menu where ?', {
        idKategori	 : req.params.id,
    }, function(err,rows) {
        res.json(rows) 
    });
})


router.post('/update/:id?', function(req, res){
    con.query("update menu set ? where ?",
    [
        { nama : req.body.nama },
        { harga : req.body.harga },        
        { id : req.params.id }
    ]);
    res.json(req.body)
})

router.get('/delete/:id?', function(req, res){
    con.query("DELETE FROM menu where ?", {
        id: req.params.id
    });
    res.send("deleted")
})    


module.exports = router;
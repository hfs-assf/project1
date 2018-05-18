const router = require('express').Router();
const con = require('../app/database');

router.post('/create', function(req, res){
    con.query("insert into kategori set ? ", {
        namaKategori : req.body.namaKategori
    }, err => {
        if (err) res.status(500).json({ status: 'gagal' })
        else res.json({ status: 'berhasil', data: req.body })
    })
    
    
})

router.get('/read', function(req, res){
    con.query("select * from kategori", function(err,kategori,field){
        res.json(kategori)
    })
})


// router.get('/edit/:id?', function(req, res){
    
//     res.json(id)
// })


router.post('/update/:id?', function(req, res){
    con.query("update kategori set ? where ?",
    [
        {
            namaKategori : req.body.namaKategori
        },
        {
            id : req.params.id,
        }
    ]);
    res.json(req.body)
})



router.get('/delete/:id?', function(req, res){
    con.query("delete from kategori where ?", {
        id: req.params.id
    }, err => {
        if (err) res.json({ status: 'gagal' });
        else res.json({ status: 'berhasil' });
    });
    // res.redirject("/adminjenis/read");
    
})

// create read update delete



module.exports = router;
const router = require('express').Router();
const con = require('../App/database');


router.post('/', function(req, res){
    var kode_invoice = "Hafas." + req.session.userdata.id + '.' + (new Date())

        con.query("SELECT * FROM chart where ?", {
            userId : req.session.userdata.id,
        },
        function(err,rows) {
            con.query("INSERT into invoice set ?", {
                userId : req.session.userdata.id,
                kodeInvoice : kode_invoice,
                totalHarga : rows[0].harga * rows[0].qty, 
                waktuInvoice : new Date
            })
            
            rows.forEach(x => {
                con.query("INSERT into detailInvoice set ?", {
                    idInvoice : kode_invoice,
                    namaMenu: x.nama,
                    harga : x.harga,
                    jumlah: x.qty,
                })
            })    

            con.query("DELETE FROM chart where ?", {
                userId : req.session.userdata.id
            })
            res.json(req.body)
        }) 
})

router.get('/:id?', function(req, res){
    con.query("SELECT * FROM detailInvoice where ?", {
        idInvoice : req.params.id
    },
    function(err,detailInvoice) {
        res.json(detailInvoice)
    })
})


module.exports = router;

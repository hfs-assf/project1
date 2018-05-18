const router = require('express').Router();
const con = require('../App/database');

// USER CREATE EDIT____________________________________________

router.post('/', function(req, res){
    con.query("SELECT * FROM menu where ?", {
        id : req.body.menu
    }, function(err,rows) {
        con.query("INSERT into chart set ?", {
            userId : req.session.userdata.id,
            menuId : rows[0].id,
            nama : rows[0].nama,
            harga : rows[0].harga,
            ongkir : rows[0].harga,
            qty : req.body.qty
        })
        res.json(req.body)
    })
})

// USER READ EDIT____________________________________________

router.get('/', function(req, res){
    con.query('SELECT * FROM chart where ?',{
        userloginId : req.session.userdata.userid
    }, function(err,cart) {
        res.json(cart)
    })
})

// USER CART EDIT____________________________________________

router.post('/update/:id?', function(req, res){
con.query("update chart set ? where ?",
    [
        { qty : req.body.qty },
        { id : req.params.id }
    ]);
    res.json(req.body)
})

// USER CART DELETE____________________________________________

router.get('/delete/:id?', function(req, res){
    con.query("delete from chart where ?",
    {
        id: req.params.id
    });
    res.json('deleted')
})  

module.exports = router;

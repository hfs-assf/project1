const router = require('express').Router();
const con = require('../app/database');
const crypto = require('crypto');

let enkripsi = (password) => {
    return crypto
        .createHmac('sha256', 'abcdefg')
        .update(password)
        .digest('hex');
}

router.post('/', function(req, res) {
    let email = req.body.email;
    let password = enkripsi(req.body.password);
    console.log(email, password)
    con.query('select * from userData where ? and ?', [{ email }, { password }], function(err, user) {
        console.log(user)
        if (user.length > 0) {
            req.session.userdata = {
                role: user[0].role,
                id: user[0].id,
                nama: user[0].nama,
                email: user[0].email
            };
            req.session.save();
            res.json(req.body)
        } else {
            res.json("username atau Password Anda Salah")
        }
    })
})

router.post('/register', function(req, res){
    con.query('SELECT * FROM userData WHERE email  = ?', [
        req.body.email
    ], 
    function (err, rows){
        if (rows.length > 0) {
            res.json(
            {
                notif:'Username sudah terdaftar !'
            })
        } else {
            con.query("insert into userData set ? ",
            {
                role: 0,
                email : req.body.email,
                password : enkripsi(req.body.password),
                nama : req.body.nama,
                phone : req.body.phone
            });

            res.json(req.body)
        }
    });
})

module.exports = router;
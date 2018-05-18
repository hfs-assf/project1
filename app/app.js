const express = require('express');
const app = express();

var session = require('express-session');
app.use(session({secret: 'ssshhhhh'}));
var sess;

app.set('view engine', 'ejs');

var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var cors = require('cors');
app.use (cors());

//login
var login = require('../routes/login');
app.use('/login', login);

//adminKategori
var adminKategori = require('../routes/adminkategori')
app.use('/adminkategori', adminKategori)

//adminMenu
var adminMenu = require('../routes/adminmenu')
app.use('/adminmenu', adminMenu)

//home
var home = require('../routes/home')
app.use('/home',home)

//menu
var menu = require('../routes/menu')
app.use('/menu',menu)

// addtocart
var addtocart = require('../routes/addtocart');
app.use('/addtocart', addtocart);

// checkout
var checkout = require('../routes/checkout');
app.use('/checkout', checkout);

//historyinvoice
var historyinvoice = require('../routes/historyInvoice');
app.use('/historyinvoice', historyinvoice);

app.listen(3005, console.log('run'));


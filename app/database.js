var mysql = require("mysql");

var conn = mysql.createConnection
(
    {
      host: "localhost",
      port: '8889',
      database: "dbRestaurant",
      user:"root",
      password:"root",

    }
)

module.exports = conn
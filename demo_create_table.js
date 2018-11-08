var mysql = require("mysql");

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'glyph123',
    database: 'mydb'
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected!");
    // create table query
    // var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    // alter table query
    var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT";
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log('Table Altered');
    });
});
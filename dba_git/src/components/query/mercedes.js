let mysql  = require('mysql');
let config = require('./config.js');
let connection = mysql.createConnection(config);

function audi(){
    // select statment
    let sql = `SELECT Year, Make, Model FROM luxmodels WHERE Make = 'Mercedes-Benz'`;

    var cars = [];
    // execute the select statment
    connection.query(sql, (err, results,fields) => {
        if (err) {
            return console.error(err.message);
        }
        console.log(results);
        
        Object.keys(results).forEach(function(key) {
            var row = results[key];
            cars[key] = row.Year + ' ' + row.Make + ' ' + row.Model;
        });
        console.log(cars);
        
    });

    connection.end();
    return cars;
}

audi();
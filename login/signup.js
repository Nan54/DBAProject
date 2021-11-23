var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
const { waitForDebugger } = require('inspector');

var connection = mysql.createConnection({ //establish mysql connection - change user, pass, and db to what you have set them as in mysql
	host     : 'localhost',
	user     : 'root',
	password : 'admin',
	database : 'car_dealership'
});

var app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/signup.html'));
});

//handle submit from login.html
app.post('/auth', function(request, response) {
	var name = request.body.name;
	var email = request.body.email;
	var password = request.body.pw;
	var cpassword = request.body.cpw;
	var comp = email && password;
	if (comp) {
		//check if email already has an account - if it exists, don't insert
		connection.query('SELECT * FROM customers WHERE email =?', [email], function(error, results, fields) {
			if(error){return console.error(error.message);}
			console.log(results)
			if (results.length > 0) {
				response.send('This email is associated with an existing account, please enter a different email.');
				response.redirect('/');
				response.end();
			}
		});
		if (password == cpassword){
			connection.query('INSERT INTO customers(name, email, password) VALUES (?,?,?)', [name, email, password], function(error, results, fields) {
				if(error){return console.error(error.message);}
				console.log(results)
				if (results.affectedRows > 0) {
					request.session.loggedin = true;
					request.session.email = email;
					response.redirect('/home');
				}
				else {
					response.send('Incorrect Email and/or Password!');					
				}			
				response.end();
			});
		}
		else {
			response.send('The passwords you entered were not the same.');
		};
	} else {
		response.send('Please enter email and Password!');
		response.end();
	}
});

app.get('/home', function(request, response) {
	if (request.session.loggedin) { //checks result of post method above
		response.send('Thanks for joining, ' + request.session.email + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(3000);

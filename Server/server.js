const audi = require('./query/audi.js');
const mercedes = require('./query/mercedes.js');
const express = require('express'); //Line 1
const routes = require('./routes/login_route');

const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3


app.use(routes);
// // create a GET route
// app.get('/express_backend', (req, res) => { //Line 9
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
// }); //Line 11

// app.get('/mercedes', (req, res) => { //Line 9
//   res.send({ results: 'mercedes()'}); //Line 10
//   console.log({results});
// }); //Line 11
// app.get('/audi', (req, res) => { //Line 9
//   res.send({ results: 'audi()'}); //Line 10
//   console.log({results});
// }); //Line 11

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6
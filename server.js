var _express = require('express');
var _http = require('http');
var mongoose = require('mongoose');
var config = require('./config');
var bodyParser = require('body-parser');

var port = 4000;
mongoose.connect(config.database);

// Middlewares
var createUser = require('./middleware/users/createUser');
var deleteUser = require('./middleware/users/deleteUser');
var getAllUser = require('./middleware/users/getAllUser');
var updateUser = require('./middleware/users/updateUser');

/**
 * Express instance.
 */
var app = _express();
app.use(bodyParser.urlencoded({ extended: true }));
// get info from POST and/or URL params
app.use(bodyParser.json());

/**
 * Routings. 
 */
app.get('/', function (req, res) {
    res.send('Welcome to the node starter project.')
});

/**
 * REST Api routes for route '/users'.
 */

app.post('/users', createUser);

app.get('/users', getAllUser);

app.put('/users/:id', updateUser);

app.delete('/users/:id', deleteUser);

// =======================
// start the server ======
// =======================
/**
 * Creating server.
 */
_http.createServer(app).listen(port, function () {
    console.log('Express server listening on port ' + port);
});

console.log('running on ' + port);
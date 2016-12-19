var _express = require('express');
var _http = require('http');
var port = 4000;

/**
 * Express instance.
 */
var app = _express();

/**
 * Routings. 
 */
app.get('/', function (req, res) {
    res.send('Welcome to the node starter project.')
});

/**
 * REST Api for route '/users'.
 */
app.get('/users', function (req, res) {
    res.send('This is get reponse')
});

app.post('/users', function(req, res) {

    res.send('This is post reponse')
});

app.put('/users', function(req, res) {
    res.send('This is put reponse')
});

app.delete('/users', function(req, res) {
    res.send('This is delete reponse')
});

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
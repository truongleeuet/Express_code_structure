/**
 * Created by truonglee on 08/01/2016.
 */
var express = require('express');
var app = express();
var config = require('./config/config')

app.use(express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
    res.send('Hello world');
})
app.listen(config.express.port, function() {
    console.log('App listening on port : 3000' );
});
module.exports = app;
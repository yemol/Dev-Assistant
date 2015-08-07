var express = require('express')
var cookie = require('cookie-parser')
var oauth = require('oauth2orize')
var bodyParser = require('body-parser')
var site = require('./site')
var api = require('./API')
var path = require('path')

var app = express();
app.set('views','./views');
app.set('view engine','ejs');
app.use(cookie());
app.use(bodyParser());
//define the path of static files
app.use(express.static(path.join(__dirname,'public')));

//site interface
app.get('/',site.index);
app.get('/login',site.login);
app.post('/login',site.loginForm);
app.get('/profile',site.profile);
app.post('/profile',site.profileForm);
//API interface
app.get('/api/login',api.login);
app.post('/api/login',api.loginForm);


var server = app.listen(8001, function() {
    console.log('Listening on port %d', server.address().port);
});

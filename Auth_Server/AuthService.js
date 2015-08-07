var express = require('express')
var oauth = require('oauth2orize');
var bodyParser = require('body-parser');

var app = express()

app.use(bodyParser.json());
app.use(express.query());

app.use(function(req,res,next){
    console.log(Date.now());
    next();
});

app.get('/grant', function (req, res) {

    var server = oauth.createServer();

    server.grant(oauth.grant.code(function(client, redirectURI, user, ares, done) {
      var code = utils.uid(16);
      var ac = new AuthorizationCode(code, client.id, redirectURI, user.id, ares.scope);
      ac.save(function(err) {
        if (err) { return done(err); }
      return done(null, code);
      });
    }));

    res.set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*",
    })
    res.send({test:"12"});

})

//start listening at 8001 part
var server = app.listen(8001, function() {
    console.log('Listening on port %d', server.address().port);
});

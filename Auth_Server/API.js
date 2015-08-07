var oauth2orize = require('oauth2orize')
var utils = require('oauth2orize/lib/utils')
var authorizationCode = require('oauth2orize/lib/exchange/authorizationCode');
var user = require('./entity/user')

exports.login = function (req, res) {
    res.render("login", {});
}

exports.loginForm = function (req, res) {
    var server = oauth2orize.createServer();
    //var code = utils.uid(64);
    //var ac = new authorizationCode(code, 1, 'http://localhost:8001', 'yemol', 'test');
    //console.log(code);

    var currentUser = new user();
    currentUser.Check(req.param("userIDTextBox"),req.param("passwordTextBox"),function(user,result){
       if (result){
            res.send('User Auth pass!');
        }
        else{
            res.send('User Auth fail!');
        }
    });

};

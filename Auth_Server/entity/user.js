var mysql = require('mysql');
var config = require('../config.json');
var crypto = require('crypto');

var user = function () {
    this.UserID = "";
    this.UserName = "";
    this.LoginPassword = "";
    this.LastLogin = Date.now;
    this.IsTrainee = false;
    this.IsDepated = true;
    this.Email = "";

    this.EMAccount = function EMAccount() {
        var Account = "";
        var Password = "";
        var JIRAToken = "";
    }

    this.Check = function (userID, passowrd, callback) {

        var connection = mysql.createConnection({
            host: config["mysqlconnect"],
            user: config["mysqlUserID"],
            password: config["mysqlPassword"]
        });

        connection.connect();
        connection.query("  SELECT\
                                `UserID`,`UserName`,`LoginPassword`,`LastLogin`,`IsTrainee`,`IsDeparted`,\                                                                               `EmailAddress`,`EMAccount`,`EMPassword`,`JIRAToken`\
                            FROM `team`.`users`\
                            WHERE userid = '" + userID + "' ",
            function (err, rows, fields) {

                if (err) {
                    connection.end();
                    callback(this, false);
                    throw err;
                } else {
                    //we cannot find the user
                    if (rows.length == 0) {
                        callback(this, false);
                    } else {
                        //get user info and post it back to user
                        var md5 = crypto.createHash('md5');
                        md5.update(passowrd);
                        var md5_password = md5.digest('hex');
                        check_result = md5_password == rows[0].LoginPassword;

                        if (check_result) {
                            this.UserID = rows[0].UserID;
                            this.UserName = rows[0].UserName;
                            this.LoginPassword = passowrd;
                            this.LastLogin = Date.now;
                            this.IsTrainee = rows[0].IsTrainee == 1;
                            this.IsDepated = rows[0].IsDeparted == 1;
                            this.Email = rows[0].EmailAddress;
                            this.EMAccount = function EMAccount() {
                                var Account = rows[0].EMAccount;
                                var Password = rows[0].EMPassword;
                                var JIRAToken = rows[0].JIRAToken;
                            }
                        }
                        console.info('User name is: ', rows[0].UserName + ' | Password is: ', md5_password + ' | Check Result is: ', check_result);
                        connection.end();
                        callback(this, true);
                    }
                }
            });
    }
}


//We used this exports to return a object instead of class.
//So we only can use
module.exports = user;

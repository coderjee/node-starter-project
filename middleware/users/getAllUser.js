// / get our mongoose model
var UserModule = require('../../modules/user');


var getAllUsers = function (req, res) {
    res.send('user List');
}

module.exports = getAllUsers;
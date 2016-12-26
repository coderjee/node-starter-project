// / get our mongoose model
var UserModule = require('../../modules/user');


var getAllUsers = function (req, res) {
    var query ={};
    UserModule.findAll(query,function (err, resp) {
        var response = {};
        if (err) {
            response = {
                success: false,
                message: 'Failed to find users.',
                error: err
            }
        } else if (resp) {
            response = {
                success: true,
                message: 'User found',
                user: resp
            }
        }
        res.send(response);
    });
}

module.exports = getAllUsers;
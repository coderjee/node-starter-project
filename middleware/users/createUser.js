// / get our mongoose model
var UserModule = require('../../modules/user');

var createUser = function (req, res) {
    var body = req.body;
    UserModule.create(body, function (err, user) {
        var response = {};
        if (err) {
            response = {
                success: false,
                message: 'Failed to add user.',
                error: err
            }
        }
        if (user) {
            response = {
                success: true,
                message: 'User added',
                user: user
            }
        }
        res.json(response);
    });
}
module.exports = createUser;
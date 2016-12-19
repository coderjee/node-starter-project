// / get our mongoose model
var UserModule = require('../../modules/user');


var deleteUser = function (req, res) {
    var userId = req.params.id;
    UserModule.delete(userId, function (err, resp) {
        var response = {};
        if (err) {
            response = {
                success: false,
                message: 'Failed to delete user.',
                error: err
            }
        }
        if (resp) {
            response = {
                success: true,
                message: 'User deleted',
                user: resp
            }
        }
        res.json(response);
    });
}
module.exports = deleteUser;
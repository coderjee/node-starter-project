// / get our mongoose model
var UserModule = require('../../modules/user');

var updateUser = function (req, res) {
    var userId = req.params.id;
    UserModule.findById(userId, function (err, user) {
        if (err) {
            response = {
                success: false,
                message: 'Failed to find users.',
                error: err
            }
            res.send(response);
        } else if (user) {
          res.send(user);
        }
    });
}
module.exports = updateUser;
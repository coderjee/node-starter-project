var mongoose = require("mongoose");
//schema
var userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true }
});
// model
var User = mongoose.model('User', userSchema);
//export model
module.exports = User;
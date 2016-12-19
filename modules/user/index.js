// import models 
var UserModel = require('./models/UserModel');

/**
 * User Module
 * 
 */
var userModule = {};
module.exports = userModule;


/**
 * These are the basic operations over any module.
 * create( user )
 * update( user )
 * delete( by id )
 * find( all users)
 * findById()
 * findByProperty(property, value)
 * 
 */

/**
 * create user
 * 
 * @param {any} user
 * @returns
 */
userModule.create = function (user) {
    return "user created";
}

/**
 * Update user
 * 
 * 
 * @param {any} user
 * @returns
 */
userModule.update = function (user) {
    return "user updated";
}

/**
 * Delete
 * 
 * @param {any} id
 * @returns
 */
userModule.delete = function (id) {
    return "user updated";
}

/**
 * Find all users
 * 
 * 
 * @returns list of users
 */
userModule.find = function () {
    return "users list";
}

/**
 * Find user by id
 */
userModule.findById = function (userId) {
    return "user found";
}

/**
 * Use to find user by passing property(name, email, phone) and values
 * 
 * @param {any} property
 * @param {any} value
 */
userModule.findByProperty = function (property, value) {
    return "property==" + property + " value ===" + value;
}
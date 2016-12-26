// import models 
var UserModel = require('./models/User');

/**
 * User Module
 * 
 */
var user = {};
module.exports = user;

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
user.create = function (userData, callback) {
    return new UserModel(userData).save(callback);
}

/**
 * Update user
 * 
 * 
 * @param {any} user
 * @returns
 */
user.update = function (user, callback) {
   return new UserModel(user).update(callback);
}

/**
 * Delete
 * 
 * @param {any} id
 * @returns
 */
user.delete = function (id, callback) {
    return UserModel.remove({ _id: id }, callback);
}

/**
 * Find all users
 * 
 * 
 * @returns list of users
 */
user.findAll = function (query, callback) {
    return UserModel.find(query, callback);
}

/**
 * Find user by id
 */
user.findById = function (id, callback) {
  return  UserModel.findOne({ _id: id }, callback);
}

/**
 * Use to find user by passing property(name, email, phone) and values
 * 
 * @param {any} property
 * @param {any} value
 */
user.findByProperty = function (property, value) {
   return UserModel.find({property: value}, callback);
}
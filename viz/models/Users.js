const db = require('../db/db_config');

let data = [];

/**
 * @typedef User
 * @prop {string} username - username
 * @prop {string} password - password
 */

/**
 * @class Users
 * Stores all Users.
 * Note that all methods are static.
 * Wherever you import this class, you will be accessing the same data.
 */
class Users {
  /**
   * Add a User.
   * @param {string} username - User body
   * @param {string} password - User id
   * @return {User} - created User
   */
  static async addOne(username, password) {
    return db.run(`INSERT INTO users (${db.columnNames.userName}, ${db.columnNames.password}) VALUES ('${username}', '${password}')`)
              .then( () => {
                return Users.findOne(username);
              });
  }

  /**
   * Find a User by username.
   * @param {string} username - username of User to find
   * @return {User | undefined} - found User
   */
  static async findOne(username) {
    return db.get(`SELECT * FROM users WHERE username = '${username}'`);
  }

  /**
   * Return an array of all of the Users.
   * @return {User[]}
   */
  static async findAll() {
    return db.all(`SELECT * FROM users`);
  }

  /**
   * Update a Users password
   * @param {string} username - username of User to find
   * @param {string} password - password of User to update
   * @return {User | undefined} - updated User
   */
  static async updatePassword(username, password) {
    return db.run(`UPDATE users 
        SET ${db.columnNames.password} = '${password}' 
        WHERE ${db.columnNames.userName} = '${username}'`)
        .then( () => {
          return Users.findOne(username);
        });
  }

  /**
   * Update a Users password
   * @param {string} username - username of User to find
   * @param {string} new_username - new username for User
   * @return {User | undefined} - updated User
   */
  static async updateUsername(username, new_username) {
    return db.run(`UPDATE users 
        SET ${db.columnNames.userName} = '${new_username}' 
        WHERE ${db.columnNames.userName} = '${username}'`)
        .then( () => {
          return Users.findOne(new_username);
        });
  }

  /**
   * Delete a User
   * @param {string} username - username of User to find
   * @return {User | undefined} - updated User
   */
  static deleteOne(username) {
    return Users.getUserID(username)
                .then( (user) => {
                  return db.run(`DELETE FROM users WHERE ${db.columnNames.userId} = ${user.user_id}`)
                    .then(() => {
                      return db.run(`DELETE FROM likes WHERE ${db.columnNames.userId} = ${user.user_id}`)
                        .then( () => {
                          return db.run(`DELETE FROM following WHERE ${db.columnNames.user1Id} = ${user.user_id} OR ${db.columnNames.user2Id} = ${user.user_id}`)
                            .then( () => {
                              return db.run(`DELETE FROM posts WHERE ${db.columnNames.postCreator} = ${user.user_id}`)
                                      .then( () => {
                                        return username;
                                      });
                            })
                        })
                    })
                });
  }

  /**
   * Find user with this login info username and password
   * @param {string} username - username of User to find
   * @param {string} password - password of User to find
   * @return {User | undefined} - User with the matching username and password
   */
  static async findUserLogin(username, password) {
    return db.get(`SELECT ${db.columnNames.userName} 
                  FROM users 
                  WHERE ${db.columnNames.userName} = '${username}' and ${db.columnNames.password} = '${password}'`);
  }

  /**
   * Find userID for given username
   * @param {string} username - username of userID to find
   * @return {User | undefined} - userID of username
   */
  static async getUserID(username) {
    return db.get(`SELECT ${db.columnNames.userId} FROM users WHERE ${db.columnNames.userName} = '${username}'`);
  }

  /**
   * Find username for given user_id
   * @param {Number} userID - userID of username to find
   * @return {User | undefined} - username of userID
   */
  static async getUserName(userID) {
    return db.get(`SELECT ${db.columnNames.userName} FROM users WHERE ${db.columnNames.userId} = ${userID}`);
  }

  /**
   * Find all users a user is following
   * @param {Number} userID - userID of username to find
   * @return {User} - user ids
   */
  static async getFollowing(userID) {
    return db.all(`SELECT * FROM following WHERE ${db.columnNames.user1Id} = "${userID}"`);
  }

  /**
   * User1 follows User2
   * @param {string} user1 - username of follower
   * @param {string} user2 - username of who to follow
   * @return {User | undefined} - username of who user1 just followed
   */
  static async followUser(user1, user2) {
    let user1_id = await Users.getUserID(user1);
    let user2_id = await Users.getUserID(user2);
    return db.run(`INSERT INTO following (${db.columnNames.user1Id}, ${db.columnNames.user2Id}) VALUES (${user1_id.user_id}, ${user2_id.user_id});`)
              .then( () => {
                return user2;
              });
  }
}


module.exports = Users;

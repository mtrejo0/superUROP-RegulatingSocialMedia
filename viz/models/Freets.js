const db = require('../db/db_config');

const Users = require('../models/Users');

let data = [];

/**
 * @typedef Freet
 * @prop {string} body - some string, <= 140 characters
 * @prop {string} id - unique Freet id
 * @prop {string} creator - username
 * @prop {string} refreet - null if not refreet, post id if refreeting another freet
 */

/**
 * @class Freets
 * Stores all Freets.
 * Note that all methods are static.
 * Wherever you import this class, you will be accessing the same data.
 */
class Freets {
  /**
   * Add a Freet.
   * @param {string} body - Freet body
   * @param {string} id - Freet id
   * @param {string} creator - Freet creator
   * @return {Freet} - created Freet
   */
  static async addOne(body, creator, refreetID = null) {
    
    //auto increments postID
    return Users.getUserID(creator)
        .then( (creatorID) => {
          return db.run(`INSERT INTO posts (
                                            ${db.columnNames.postCreator},
                                            ${db.columnNames.postRefreetID},
                                            ${db.columnNames.postBody}
                                            ) 
                        VALUES ('${creatorID.user_id}', '${refreetID}', '${body}')`)
                .then( () =>{
                  return db.get(`SELECT MAX(post_id), post_id, creator, refreet_id, body FROM posts`);
                });
        })
                
  }

  /**
   * Find a Freet by id.
   * @param {string} id - id of Freet to find
   * @return {Freet | undefined} - found Freet
   */
  static async findOne(id) {
    return db.get(`SELECT * FROM posts 
      WHERE ${db.columnNames.postID} = '${id}'`);
  }

  /**
   * Find a Freet by author.
   * @param {string} creator - author of Freets to find
   * @return {Freet[]} - found Freets
   */
  static async findAllBy(creator) {
    return Users.getUserID(creator)
    .then( (creatorID) => {
      return db.all(`SELECT * FROM posts 
      WHERE ${db.columnNames.postCreator} = ${creatorID['user_id']}`)
    }
    )
  }

  /**
   * Return an array of all of the Freets.
   * @return {Freet[]}
   */
  static async findAll() {
    return db.all(`SELECT * FROM posts`)
  }

  /**
   * Return all the users a user is following
   * @return {Freet[]}
   */
  static async findAll(id) {
    return db.all(`SELECT * FROM posts`)
  }

  /**
   * Update a Freet.
   * @param {string} body - body of Freet to update
   * @param {string} id - id of Freet to find
   * @return {Freet | undefined} - updated Freet
   */
  static async updateOne(body, id) {
    return db.run(`UPDATE posts 
        SET ${db.columnNames.postBody} = "${body}" 
        WHERE ${db.columnNames.postID} = ${id}`)
        .then( () => {
          return Freets.findOne(id);
        });
  }

  /**
   * Delete a Freet
   * @param {string} id - id of Freet to delete
   * @return {Freet | undefined} - deleted Freet
   */
  static async deleteOne(id) {
    return Freets.findOne(id)
                .then( (freet) => {
                  return db.run(`DELETE FROM posts WHERE ${db.columnNames.postID} = ${freet.post_id}`)
                    .then(() => {
                      return db.run(`DELETE FROM likes WHERE ${db.columnNames.postID} = ${freet.post_id}`)
                        .then( () => {
                          return freet;
                        })
                    })
                });
  }

  /**
   * Upvote a Freet
   * @param {string} username - username attempting to upvote
   * @param {string} post_id - id of Freet to upvote
   * @return {Freet | undefined} - Freet that was just upvoted
   */
  static async upvote(username, post_id) {
    let user = await Users.getUserID(username);
    return db.run(`INSERT INTO likes (${db.columnNames.userId}, ${db.columnNames.postID}) VALUES (${user.user_id}, ${post_id})`)
              .then( () => {
                return Freets.findOne(post_id);
              });
  }

  /**
   * Get number of upvotes for a post
   * @param {string} post_id - id of Freet 
   * @return {Freet | undefined} - number of likes for freet with id post_id
   */
  static async getLikes(post_id) {
    return db.all(`SELECT * FROM likes WHERE ${db.columnNames.postID} = ${post_id}`)
  }

  /**
   * Get number of refreets for a post
   * @param {string} post_id - id of Freet 
   * @return {Freet | undefined} - number of refreets for freet with id post_id
   */
  static async getRefreets(post_id) {
    return db.all(`SELECT * FROM posts WHERE ${db.columnNames.postRefreetID} = ${post_id}`)
  }

}

module.exports = Freets;

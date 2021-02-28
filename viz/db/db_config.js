const sqlite3 = require('sqlite3');

let sqlDb;

// name the columns of our tables for localization
const columnNames = {
  userId: "user_id",
  user1Id: "user1_id",
  user2Id: "user2_id",
  password: "password",
  userName: "username",
  postID: "post_id",
  postBody: "body",
  postCreator: "creator",
  postRefreetID: "refreet_id",
};
Object.freeze(columnNames);

function createDb() {
  console.log("created our db!");
  sqlDb = new sqlite3.Database('frittera3.db', function() {
    createUserTable();
    createPostsTable();
    createFollowingTable();
    createLikesTable();
  });
};

function createUserTable() {
  sqlDb.run(`CREATE TABLE IF NOT EXISTS users (
    ${columnNames.userId} INTEGER PRIMARY KEY AUTOINCREMENT,
    ${columnNames.userName} TEXT NOT NULL UNIQUE,
    ${columnNames.password} TEXT NOT NULL
  )`);
};

function createPostsTable() {
  sqlDb.run(`CREATE TABLE IF NOT EXISTS posts (
    ${columnNames.postID} INTEGER PRIMARY KEY AUTOINCREMENT,
    ${columnNames.postCreator} INTEGER NOT NULL,
    ${columnNames.postRefreetID} INTEGER,
    ${columnNames.postBody} TEXT NOT NULL,
    FOREIGN KEY (${columnNames.postCreator}) REFERENCES users(${columnNames.userId}) ON DELETE CASCADE,
    FOREIGN KEY (${columnNames.postRefreetID}) REFERENCES posts(${columnNames.postID}) ON DELETE CASCADE
  )`);
};

function createFollowingTable() {
  sqlDb.run(`CREATE TABLE IF NOT EXISTS following (
    ${columnNames.user1Id} INTEGER NOT NULL,
    ${columnNames.user2Id} INTEGER NOT NULL,
    CONSTRAINT uniqueTuple Unique (${columnNames.user1Id}, ${columnNames.user2Id}),
    FOREIGN KEY (${columnNames.user1Id}) REFERENCES users(${columnNames.userId}) ON DELETE CASCADE,
    FOREIGN KEY (${columnNames.user2Id}) REFERENCES users(${columnNames.userId}) ON DELETE CASCADE
  )`);
}

function createLikesTable() {
  sqlDb.run(`CREATE TABLE IF NOT EXISTS likes (
    ${columnNames.userId} INTEGER NOT NULL,
    ${columnNames.postID} INTEGER NOT NULL,
    CONSTRAINT uniqueTuple Unique (${columnNames.userId}, ${columnNames.postID}),
    FOREIGN KEY (${columnNames.userId}) REFERENCES users(${columnNames.userId}) ON DELETE CASCADE,
    FOREIGN KEY (${columnNames.postID}) REFERENCES posts(${columnNames.postID}) ON DELETE CASCADE
  )`);
}

// Helper wrapper functions that return promises that resolve when sql queries are complete.

function run(sqlQuery) {
  return new Promise((resolve, reject) => {
    sqlDb.run(sqlQuery, (err) => {
      if (err !== null) {
        reject(err);
      } else {
        resolve();
      }
    })
  });
};

function get(sqlQuery) {
  return new Promise((resolve, reject) => {
    sqlDb.get(sqlQuery, (err, row) => {
      if (err !== null) {
        reject(err);
      } else {
        resolve(row);
      }
    })
  });
};

function all(sqlQuery) {
  return new Promise((resolve, reject) => {
    sqlDb.all(sqlQuery, (err, rows) => {
      if (err !== null) {
        reject(err);
      } else {
        resolve(rows);
      }
    })
  });
};

createDb();

module.exports = {
  columnNames,
  get,
  all,
  run,
};
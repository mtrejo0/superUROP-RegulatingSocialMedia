const express = require('express');

const Users = require('../models/Users');

const router = express.Router();

const {isLoggedIn, matchUsername, matchPassword} = require('./util');

/**
 * Create new user
 * @name POST/api/users/
 * @param {string} username 
 * @param {string }password 
 */
 router.post('/', async (req, res) => {
  try {
    if (!matchUsername(req.body.username, res)) return;
    if (!matchPassword(req.body.password, res)) return;
    let username = await Users.findOne(req.body.username);

    if (username) {
      res.status(409).json({ message: 'That username already exists' }).end();
      return;
    }
    username = await Users.addOne(req.body.username, req.body.password);
    res.status(201).json(username).end();

  } catch (error) {
    res.status(503).json({ message: `Could not create the user: ${error}` }).end();
  }
});

/**
 * Get all users
 * @name GET/api/users/
 */
router.get('/', async (req, res) => {
  try {
    let users =  await Users.findAll();
    res.status(200).json({'users': users}).end();
  } catch (error) {
    res.status(503).json({ message: `Could not create the user: ${error}` }).end();
  }
});

/**
 * Get user with username
 * @name GET/api/users/
 * @param username
 */
router.get('/:username', async (req, res) => {
  try {
    let user =  await Users.findOne(req.params.username);
    res.status(200).json(user).end();
  } catch (error) {
    res.status(503).json({ message: `Could not create the user: ${error}` }).end();
  }
});

/**
 * Delete a user
 * @name DELETE/api/users/
 * @param {string} username 
 */
router.delete('/', async (req, res) => {
  try {
    if (!isLoggedIn(req, res)) return;
    let user = await Users.deleteOne(req.cookies['fritter-auth']);
    res.status(200).json({ message: `(${user}) has been deleted` }).end();
    return;
  } catch (error) {
    res.status(503).json({ message: `Could not delete the user: ${error}` }).end();
    return;
  }
});

/**
 * Update the username for logged in user
 * @name PUT/api/users/username
 * @param {string} username 
 */
router.put('/username', async (req, res) => {
  try {
    if (!isLoggedIn(req, res)) return;
    if (!matchUsername(req.body.username, res)) return;
    if (req.body.old === req.body.username) {
      res.status(400).json({ message: `Username is already (${req.body.username})`}).end();
      return;
    }

    let existingUser = await Users.findOne(req.body.username);
    if (existingUser) {
      res.status(400).json({ message: `There is already a user with the username (${req.body.username})`}).end();
    }
    let user = await Users.updateUsername(req.body.old,req.body.username)
    if (user) {
      req.body.old = user.username;
      res.status(200).json({ message: `Username changed to (${user.username})`}).end();
      return;
    }
  } catch (error) {
      res.status(503).json({ message: `Could not change the username: ${error}` }).end();
      return;
  }
  res.status(503).json({ message: `Could not change the username.` }).end();
});

/**
 * Update the password for logged in user
 * @name PUT/api/users/password
 * @param {string} password 
 */
router.put('/password', async (req, res) => {
  try {
    if (!isLoggedIn(req, res)) return;
    if (!matchPassword(req.body.password, res)) return;
    let user = await Users.updatePassword(req.body.username, req.body.password);
    if (user) {
      res.status(200).json({ username: user.username, message: `(${user.username})'s password succesfully changed!`}).end();
      return;
    }
  } catch (error) {
    res.status(503).json({ message: `Could not change the password: ${error}` }).end();
    return;
  }
  res.status(503).json({ message: `Could not change the password` }).end();
});

/**
 * Sign in as user with (username, password)
 * @name POST/api/users/signin
 * @param {string} username 
 * @param {string} password 
 */
router.post('/signin', async (req, res) => {
  try{
    // if not already logged in
    if (!matchUsername(req.body.username, res)) return;
    if (!matchPassword(req.body.password, res)) return;
    if (!req.cookies['fritter-auth']) {
      user = await Users.findUserLogin(req.body.username, req.body.password);
      if (!user) {
        res.status(404).json({ message: `The username and/or password is incorrect` }).end();
        return;
      }
      res.status(201).json({username: user.username, message:`Succesfully signed in as (${user.username})`}).end();

    } else {
         res.status(400).json({ message: `You are already signed in to (${req.cookies['fritter-auth']})` }).end();
    }
  } catch (error) {
    res.status(503).json({ message: "Could not sign user in" }).end();
  }
 });


/**
 * Sign out as current user
 * @name POST/api/users/signout
 */
router.post('/signout', async (req, res) => {
  try {
    if (!isLoggedIn(req, res)) return;
    res.status(200).json({ message: `Succesfully signed out!`}).end();
  } catch (error) {
    res.status(503).json({ message: "Could not sign user out" }).end();
  }
 });

module.exports = router;

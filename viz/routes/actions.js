const express = require('express');

const router = express.Router();

const Freets = require('../models/Freets');
const Users = require('../models/Users');

const {isLoggedIn, matchUsername, matchPassword} = require('./util');

/**
 * Follow a user
 * @name POST/api/actions
 * @param {string} username - user which to follow
 * @throws {400} - if username is invalid
 * @throws {401} - if requested follow is current user
 * @throws {403} - if user not logged in
 */
router.post('/follow', async (req, res) => {
	try {
		if (!isLoggedIn(req, res)) return;
		
		// Make sure user exists
	    let existingUser = await Users.findOne(req.body.otherUser);
	    if (!existingUser) {
      		res.status(400).json({ message: `There is no user with username (${req.body.otherUser}) to follow`}).end();
      		return;
    	}
    	if (existingUser.username === req.body.username) {
    		res.status(401).json({ message: `You cannot follow yourself!`}).end();
      		return;
		}
		try {
    	let following = await Users.followUser(req.body.username, req.body.otherUser);
    		if (following) {
    			res.status(200).json({ message: `Successfully followed user (${following})`}).end();
			}
		} catch (error) {
			res.status(503).json({ message: `You are already following this user!` }).end();
		}
	} catch (error) {
		res.status(503).json({ message: `Could not follow the user: ${error}` }).end();
	}
});

/**
 * Create a Freet.
 * @name POST/api/actions
 * @param {string} id - id of Freet
 * @throws {403} - if user is not logged in 
 * @throws {400} - if invalid post id
 */
router.post('/likes', async (req, res) => {
	try {
		if (!isLoggedIn(req, res)) return;
	    // Make sure post exists
	    let existingPost = await Freets.findOne(req.body.id);
	    if (!existingPost) {
      		res.status(400).json({ message: `There is no post with ID ${req.body.id}`}).end();
      		return;
    	}
    	if (existingPost.refreet_id !== 'null') {
    		existingPost = await Freets.findOne(existingPost.refreet_id);
    	}
    	let like = await Freets.upvote(req.cookies['fritter-auth'], existingPost.post_id);
    	if (like) {
    		res.status(200).json({ message: `Successfully liked post (${existingPost.body})`}).end();
    	}
	} catch (error) {
		res.status(503).json({ message: `Could not like the freet: ${error}` }).end();
	}
});

/**
 * Refreet a Freet.
 * @name POST/api/actions
 * @param {string} id - id of Freet
 * @throws {403} - if user is not logged in 
 * @throws {400} - if invalid post id
 */
router.post('/refreet', async (req, res) => {
    try {
        if (!isLoggedIn(req, res)) return;

        let existingPost = await Freets.findOne(req.body.id);

	    if (!existingPost) {
      		res.status(400).json({ message: `There is no post with ID ${req.body.id}`}).end();
      		return;
        }

        const allFreets = await Freets.findAll();

        let pastRefreet = null
        allFreets.forEach(freet => {
            if (freet.creator == req.cookies['fritter-auth'] && freet.refreet_id == req.body.id){
                pastRefreet = freet;
            }
        });

        if (pastRefreet) {
            res.status(300).json({ message: `You already refreeted this post!`, refreet: pastRefreet }).end()
            return;
        }

        let refreet = await Freets.addOne(existingPost.body, req.cookies['fritter-auth'], req.body.id)
        res.status(200).json({ message: `Successfully refreeted post`, refreet: refreet }).end()
    }
    catch(error){
        res.status(503).json({message: `Could not refreet freet with ${req.body.id}` + error}).end();
    }
    
});


module.exports = router;

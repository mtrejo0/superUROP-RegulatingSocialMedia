const express = require('express');

const Freets = require('../models/Freets');
const Users = require('../models/Users');

const router = express.Router();

const util = require('./util.js');

/**
 * Create a Freet.
 * @name POST/api/Freets
 * @param {string} body - body of Freet (link will be /:Freet)
 * @param {string} id - id points to Freet
 * @return {Freet} - the created Freet
 * @throws {403} - if user is not logged in 
 * @throws {400} - if name is already taken
 */
router.post('/', [], async (req, res) => {
  try {
    if (!util.isLoggedIn(req, res)) return;
    if (!util.matchFreet(req.body.body, res)) return;
    const freet = await Freets.addOne(req.body.body, req.body.username)
    res.status(200).json({'message':'Succesfully created freet', 'freet': freet}).end();
    
  } catch (error) {
    res.status(503).json({ message: `Could not add new freet: ${error}` }).end();
  }

});

/**
 * List all Freets.
 * @name GET/api/Freets
 * @return {Freet[]} - list of Freets
 */
router.get('/', [], async (req, res) => {
  try {
    const freets = await Freets.findAll()
    const freetsExtra = []
    for (let i = 0; i < freets.length ; i++) {
      const freet = freets[i];
      const likes  =  await Freets.getLikes(freet.post_id)
      const refreets  =  await Freets.getRefreets(freet.post_id)
      const username  =  await Users.getUserName(freet.creator)
      freet.likes = likes
      freet.refreets = refreets
      freet.username = username['username']
      freetsExtra.push(freet)
    }
      
    res.status(200).json({'freets': freetsExtra}).end();
  } catch (error) {
    res.status(503).json({ message: `Could not fetch all shorts: ${error}` }).end();
  }
});

/**
 * List all posts from users that the user is following
 * @name GET/api/freets/feed
 * @return {Freet[]} - list of Freets
 */
router.get('/feed', [], async (req, res) => {
  try {
    const freets = await Freets.findAll()
    const following = await Users.getFollowing(req.cookies['fritter-auth-id'])
    const freetsExtra = []
    for (let i = 0; i < freets.length ; i++) {
      const freet = freets[i];
      // make sure its from someone the user is following
      let isFollowing = false
      for (let j = 0; j < following.length ; j++) {
        if ( freet.creator == following[j]['user2_id']) {
          isFollowing = true;
          break
        }
      }
      if (!isFollowing) {
        continue
      }
      const likes  =  await Freets.getLikes(freet.post_id)
      const refreets  =  await Freets.getRefreets(freet.post_id)
      const username  =  await Users.getUserName(freet.creator)
      freet.likes = likes
      freet.refreets = refreets
      freet.username = username['username']
      freetsExtra.push(freet)
    }
    res.status(200).json({'freets': freetsExtra}).end();
  } catch (error) {
    res.status(503).json({ message: `Could not fetch all shorts: ${error}` }).end();
  }
});



/**
 * List all Freets by author.
 * @name POST/api/Freets/author
 * @return {Freet[]} - list of Freets by author
 */
router.get('/:author', [], async (req, res) => {
  try {
    if(!util.matchUsername(req.params.author, res)) return;

    const allFreets = await Freets.findAllBy(req.params.author);
    const allFreetsLikes = []
    for (let i = 0; i < allFreets.length ; i++) {
      const freet = allFreets[i];
      const likes  =  await Freets.getLikes(freet.post_id)
      const refreets  =  await Freets.getRefreets(freet.post_id)
      const username  =  await Users.getUserName(freet.creator)
      freet.likes = likes
      freet.refreets = refreets
      freet.username = username['username']
      allFreetsLikes.push(freet)
    }
    res.status(200).json({'freets': allFreetsLikes}).end();
    
  } catch (error) {
    res.status(503).json({ message: `Could not get all freets: ${error}` }).end();
  }
});

/**
 * Update a Freet.
 * @username PUT/api/freets/
 * @param {string} body - the new body of the freet
 * @return {Freet} - the updated Freet
 * @throws {403} - if user is not logged in, or logged in to another account
 * @throws {404} - if Freet does not exist
 */
router.put('/', [], async (req, res) => {
  try {
    if (!util.isLoggedIn(req, res)) return;
    if (!util.matchID(req.body.id, res)) return;

    const freetId = parseInt(req.body.id)

    // find the freet
    const existingFreet = await Freets.findOne(freetId);

    if (!existingFreet) {
      res.status(404).json({
        error: `Freet with id ${freetId} does not exist.`,
      }).end();
      return;
    }  

    if (req.cookies['fritter-auth-id'] != existingFreet.creator){
      res.status(403).json({
        error: `You must be logged in to the owner account (${existingFreet.creator}) to edit freet ${freetId}!`
      }).end();
      return;
    }

    if (req.body.content.length < 1){
      res.status(403).json({
        error: `Freet body cannot be empty!`
      }).end();
      return;
    }

    const Freet = await Freets.updateOne(req.body.content, freetId)
    res.status(200).json({'message':'Succesfully updated freet', 'freet': Freet}).end()
    

  } catch (error) {
    res.status(503).json({ message: `Could not update freet: ${error}` }).end();
  }
});

/**
 * Delete a Freet.
 * @username DELETE/api/Freets/:id
 * @return {Freet} - the deleted Freet
 * @throws {403} - if user is not logged in, or logged in to another account 
 * @throws {404} - if Freet does not exist
 */
router.delete('/:id', [], async (req, res) => {
  try {
    if (!util.isLoggedIn(req, res)) return;
    if (!util.matchID(req.params.id, res)) return;

    const freetId = parseInt(req.params.id)

    // find the freet
    const existingFreet = await Freets.findOne(freetId);

    if (!existingFreet) {
      res.status(404).json({
        error: `Freet with id ${freetId} does not exist.`,
      }).end();
      return;
    }  
    if (req.cookies['fritter-auth-id'] != existingFreet.creator) {
      res.status(403).json({
        error: `You must be logged in to the owner account (${existingFreet.creator}) to delete freet ${freetId}!`
      }).end();
      return;
    } 

    const Freet = await Freets.deleteOne(freetId)
    res.status(200).json({'message':'Succesfully deleted freet', 'freet': Freet}).end()
    
  }
  catch(error){
    res.status(503).json({ message: `Could not get delete freet: ${error}` }).end()
  }

});



module.exports = router;

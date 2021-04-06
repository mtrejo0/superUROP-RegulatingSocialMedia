const express = require("express");

const Freets = require("../models/Freets");
const Users = require("../models/Users");
const { checkSessionActive, checkUserLoggedIn } = require('./helpers');

const router = express.Router();

// 400 error code for empty

/**
 * Create a Tweet if the user is logged in
 * @name POST/api/freets
 * @param {string} content - content of the tweet as a string where messages are 140 characters or less
 * @return {Tweet} - the created Tweet object
 */
router.post("/", (req, res) => {
    // make sure user is logged in
    if (checkUserLoggedIn(req, res) === false) return; 

    // make sure user session is still active
    if (checkSessionActive(req, res) === false) return;

    if (req.body.text.length > 140) {
        res.status(400)
            .json({
                error: `Your updated tweet must be less than 140 characters long.`
            })
            .end();
        return;
    } else if (!req.body.text.trim()) {
        res.status(400)
            .json({
                error: `Freets must be non-empty`
            })
            .end();
        return;
    }
    
    const currentUser = Users.getUserBySession(req.session.id);
    const tweet = Freets.addFreet(req.body.text, currentUser);
    res.status(200)
        .json(tweet)
        .end();
});

/**
 * Lists all Freets by followers
 * @name GET/api/freets
 * @return {Tweet[]} - list of all Freets
 */
router.get("/", (req, res) => {
    const currentUser = Users.getUserBySession(req.session.id);
    const following = Users.getFollowing(currentUser);
    const freets = Freets.findFreetsByFollowing(following).reverse();
    res.status(200)
        .json({ data: freets })
        .end();
});

/**
 * Lists all Freets regardless of author
 * @name GET/api/freets/all
 * @return {Tweet[]} - list of all Freets
 */
router.get("/random", (req, res) => {
    const currentUser = Users.getUserBySession(req.session.id);
    const following = Users.getFollowing(currentUser);
    const freets = Freets.findAllFreets(following).reverse();
    const size = 3;
    const freetSelection = []
    for( let i = 0 ; i < size ; i ++){
        const index = Math.floor(Math.random()*(freets.length))
        freetSelection.push(freets[index])
    }
    
    res.status(200)
        .json({ data: freetSelection })
        .end();
});

/**
 * Lists tweets recommended for a user
 * @name GET/api/freets/recommend
 * @return {Tweet[]} - list of all Freets
 */
router.get("/recommend", (req, res) => {
    const currentUser = Users.getUserBySession(req.session.id);
    const following = Users.getFollowing(currentUser);
    const freets = [{ id: 1 , content: "recommended", author: "hello", og_author: null, time: "", 'upvotes': [], 'retweets': []}];
    res.status(200)
        .json({ data: freets })
        .end();
});

/**
 * Lists all Freets associated with an author
 * @name GET/api/freets/:author
 * :author is a username (as a string)
 * @return {Tweet[]} - list of all Freets associated with the given author
 */
router.get("/:author", (req, res) => {
    const author = req.params.author;
    if (!Users.findOne(author)) {
        res.status(404).json({
            error: `Author with the name: ${author} does not exist!`
        });
        return;
    }
    const currentUser = Users.getUserBySession(req.session.id);
    const following = Users.getFollowing(currentUser);

    if (!(following.has(author))) {
        res.status(403).json({
            error: `You must follow user ${author} to see their Freets!`
        });
        return;
    }

    const freets = Freets.findFreetsByAuthor(author);
    res.status(200)
        .json(freets.reverse())
        .end();
});

/**
 * Lists all Freets upvoted by an author
 * @name GET/api/freets/upvotes/:author
 * :author is a username (as a string)
 * @return {Tweet[]} - list of all Freets associated with the given author
 */
router.get("/upvotes/:author", (req, res) => {
    const author = req.params.author;
    if (!Users.findOne(author)) {
        res.status(404).json({
            error: `Author with the name: ${author} does not exist!`
        });
        return;
    }
    const currentUser = Users.getUserBySession(req.session.id);
    const following = Users.getFollowing(currentUser);

    if (!(following.has(author))) {
        res.status(403).json({
            error: `You must follow user ${author} to see their Freets!`
        });
        return;
    }

    const freets = Freets.findFreetsUpvotedByAuthor(author);
    res.status(200)
        .json(freets.reverse())
        .end();
});

/**
 * Updates a Tweet if the user is logged in and the Tweet associated with the given id exists
 * @name PUT/api/freets/:id
 * :id is the unique ID of the Tweet
 * @param {string} content - new content that the user wants to update
 * @return {Tweet} - the updated Tweet object
 * @throws {404} - if Tweet does not exist
 */
router.put("/:id", (req, res) => {
    // make sure user is logged in
    if (checkUserLoggedIn(req, res) === false) return; 

    // make sure user session is still active
    if (checkSessionActive(req, res) === false) return;

    if (req.params.id.length === 0) {
        res.status(404)
            .json({
                error: `Tweet ID must be nonempty`
            })
            .end();
        return;
    }

    if (Freets.findFreetByID(req.params.id) === undefined) {
        res.status(404)
            .json({
                error: `The Tweet associated with ID ${req.params.id} does not exist.`
            })
            .end();
        return;
    }

    const tweet = Freets.findFreetByID(req.params.id);
    const currentUser = Users.getUserBySession(req.session.id);
    if (tweet.author !== currentUser || tweet.og_author !== currentUser) {
        res.status(403)
            .json({
                error: `You do not have permissions to edit this tweet associated with ID ${req.params.id}.`
            })
            .end();
        return;
    }

    if (req.body.text.length > 140) {
        res.status(400)
            .json({
                error: `Your updated tweet must be less than 140 characters long.`
            })
            .end();
        return;
    } else if (!req.body.text.trim()) {
        res.status(400)
            .json({
                error: `Freets must be non-empty`
            })
            .end();
        return;
    }
    Freets.updateFreet(req.params.id, req.body.text);
    res.status(200)
        .json(tweet)
        .end();
});

/**
 * Deletes a Tweet if the user is logged in and the Tweet associated with the given id exists
 * @name DELETE/api/freets/:id
 * :id is the unique ID of the Tweet
 * @return {Tweet} - the deleted Tweet object
 * @throws {404} - if Tweet does not exist
 */
router.delete("/:id", (req, res) => {
    // make sure user is logged in
    if (checkUserLoggedIn(req, res) === false) return; 

    // make sure user session is still active
    if (checkSessionActive(req, res) === false) return;

    if (req.params.id.length === 0) {
        res.status(404)
            .json({
                error: `Tweet ID must be nonempty`
            })
            .end();
        return;
    }

    if (Freets.findFreetByID(req.params.id) === undefined) {
        res.status(404)
            .json({
                error: `The Tweet associated with ID ${req.params.id} does not exist.`
            })
            .end();
        return;
    }

    const tweet = Freets.findFreetByID(req.params.id);
    const currentUser = Users.getUserBySession(req.session.id);
    if (tweet.author !== currentUser) {
        res.status(403)
            .json({
                error: `You do not have permissions to delete this tweet associated with ID ${req.params.id}.`
            })
            .end();
        return;
    }

    Freets.deleteFreet(req.params.id);
    res.status(200)
        .json(tweet)
        .end();
});

/**
 * Upvotes a Tweet if user follows the Tweet's author
 * @name POST/api/freets/upvote/:id
 * :id is the unique ID of the Tweet
 * @return {Tweet} - the Tweet object that was upvoted
 * @throws {404} - if Tweet does not exist
 * @throws {403} - user does not follow Tweet's author and original author
 */
router.post("/upvote/:id", (req, res) => {
    // make sure user is logged in
    if (checkUserLoggedIn(req, res) === false) return; 

    // make sure user session is still active
    if (checkSessionActive(req, res) === false) return;

    if (req.params.id.length === 0) {
        res.status(404)
            .json({
                error: `Tweet ID must be nonempty`
            })
            .end();
        return;
    }
    
    if (Freets.findFreetByID(req.params.id) === undefined) {
        res.status(404)
            .json({
                error: `The Tweet associated with ID ${req.params.id} does not exist.`
            })
            .end();
        return;
    }
    const tweet = Freets.findFreetByID(req.params.id);

    const currentUser = Users.getUserBySession(req.session.id);
    const following = Users.getFollowing(currentUser);
    const author = tweet.author;
    // if (!(following.has(author)) || !(following.has(tweet.og_author))) {
    //     res.status(403).json({
    //         error: `You must follow this Tweet's author and original author to upvote this Tweet!`
    //     });
    //     return;
    // }
    Freets.upvoteFreet(req.params.id, currentUser);
    res.status(200)
        .json(tweet)
        .end();
});

/**
 * Undos Tweet upvote if user follows the Tweet's author
 * @name DELETE/api/freets/upvote/:id
 * :id is the unique ID of the Tweet
 * @return {Tweet} - the Tweet object to remove an upvote from
 * @throws {404} - if Tweet does not exist
 * @throws {403} - user does not follow Tweet's author and original author
 */
router.delete("/upvote/:id", (req, res) => {
    // make sure user is logged in
    if (checkUserLoggedIn(req, res) === false) return; 

    // make sure user session is still active
    if (checkSessionActive(req, res) === false) return;

    if (req.params.id.length === 0) {
        res.status(404)
            .json({
                error: `Tweet ID must be nonempty`
            })
            .end();
        return;
    }
    
    if (Freets.findFreetByID(req.params.id) === undefined) {
        res.status(404)
            .json({
                error: `The Tweet associated with ID ${req.params.id} does not exist.`
            })
            .end();
        return;
    }
    const tweet = Freets.findFreetByID(req.params.id);
    const currentUser = Users.getUserBySession(req.session.id);
    const following = Users.getFollowing(currentUser);
    const author = tweet.author;
    // if (!(following.has(author)) || !(following.has(tweet.og_author))) {
    //     res.status(403).json({
    //         error: `You are not following this Tweet's author and original author!`
    //     });
    //     return;
    // }
    Freets.undoFreetUpvote(req.params.id, currentUser);
    res.status(200)
        .json(tweet)
        .end();
});


/**
 * retweets a Tweet if user follows the Tweet's author and original author
 * @name POST/api/freets/refreet/:id
 * :id is the unique ID of the Tweet
 * @return {Tweet} - the refreet, if successful
 * @throws {404} - if Tweet does not exist
 * @throws {403} - user does not follow Tweet's author and original author
 * @throws {400} - user trying to refreet a tweet that was originally theirs
 */
router.post("/refreet/:id", (req, res) => {
    // make sure user is logged in
    if (checkUserLoggedIn(req, res) === false) return; 

    // make sure user session is still active
    if (checkSessionActive(req, res) === false) return;

    if (req.params.id.length === 0) {
        res.status(404)
            .json({
                error: `Tweet ID must be nonempty`
            })
            .end();
        return;
    }
    
    if (Freets.findFreetByID(req.params.id) === undefined) {
        res.status(404)
            .json({
                error: `The Tweet associated with ID ${req.params.id} does not exist.`
            })
            .end();
        return;
    }
    const tweet = Freets.findFreetByID(req.params.id);

    const currentUser = Users.getUserBySession(req.session.id);
    const following = Users.getFollowing(currentUser);
    const author = tweet.author;
    // if (!(following.has(author)) || !(following.has(tweet.og_author))) {
    //     res.status(403).json({
    //         error: `You must follow this Tweet's author and original author to refreet this Tweet!`
    //     });
    //     return;
    // }
    const newFreet = Freets.refreetFreet(req.params.id, currentUser);
    if (newFreet === undefined) {
        res.status(400)
            .json({
                error: `You may not refreet your own tweet, and you can only refreet a tweet once.`
            })
            .end();
    } else {
        res.status(200)
            .json(newFreet)
            .end();
    }
    
});

module.exports = router;

const tweets = require('../../twitter/tweets.json');

/**
 * @typedef Tweet
 * @prop {int} id - unique ID identifying one specific tweet
 * @prop {string} text - text of the tweet as a string where messages are 140 characters or less
 * @prop {string} author - username
 * @prop {string} og_author = username
 * @prop {List[string]} upvotes - usernames that upvoted this tweet
 * @prop {List[Tweet]} retweets - refreet ids
 */


 /**
 * Returns a closured Freets object that can execute Tweet operations
 * Wherever you import this class, you will be accessing the same data.
 */
function Freets() {
    let _data = [];
    let _counter = 0;

    const that = Object.create(Freets.prototype);

    /**
     * Add a Tweet
     * @param {string} text - Tweet text
     * @param {string} author - Tweet user
     * @return {Tweet} - returns a created Tweet
     */
    that.addFreet = (text, author = null, og_author = null) => {
        const id = _counter.toString();
        const time = Date.now();
        og_author = og_author === null ? author : og_author;
        const tweet = { id, text, author, og_author, time, 'upvotes': [], 'retweets': []};
        _counter++;
        _data.push(tweet);
        return tweet;
    };

    for(let i = 0 ; i < tweets.length ; i ++){
        that.addFreet(tweets[i].text)
    }

    /**
     * Find a Tweet by its unqiue ID
     * @param {int} id - ID of the Tweet to find
     * @return {Tweet | undefined} - Tweet object found or undefined
     */
    that.findFreetByID = id => {
        return _data.filter(tweet => tweet.id === id)[0];
    };

    /**
     * Find all the Freets that are associated with users that the current user is following
     * @param {string} following - set of users that current user is following
     * @return {Tweet[] | []} - A list of Tweet objects found or empty list
     */
    that.findFreetsByFollowing = (following) => {
        return _data.filter(tweet => following.has(tweet.author) && following.has(tweet.og_author));
    };

    /**
     * Find all the Freets that are associated with an author username.
     * @param {string} author - Author of Freets to find
     * @return {Tweet[] | undefined} - A list of Tweet objects found or undefined
     */
    that.findFreetsByAuthor = author => {
        return _data.filter(tweet => tweet.og_author === author);
    };

    /**
     * Find all the Freets that are upvoted by an author username.
     * @param {string} author - Author of Freets to find
     * @return {Tweet[] | undefined} - A list of Tweet objects found or undefined
     */
    that.findFreetsUpvotedByAuthor = author => {
      return _data.filter(tweet => tweet.upvotes.includes(author));
  };

    /**
     * Return an array of all Freets
     * @return {Tweet[]}
     */
    that.findAllFreets = () => {
        return [..._data];
    };

    /**
     * Updates a Tweet's text given an ID.
     * @param {string} ID - ID of Tweet to update
     * @param {string} text - new text to update
     * @return {Tweet | undefined} - updated Tweet object
     */
    that.updateFreet = (id, text) => {
        const tweet = that.findFreetByID(id);
        tweet.text = text;
        return tweet;
    };

    /**
     * Deletes a Tweet given an ID
     * @param {string} id - ID of Tweet to delete
     * @return {Tweet | undefined} - deleted Tweet object
     */
    that.deleteFreet = id => {
        const tweet = that.findFreetByID(id);
        _data = _data.filter(tweet => tweet.id !== id);
        _data.forEach(tweet => {
            tweet.retweets = tweet.retweets.filter(refreet => refreet.id !== id);
        })
        return tweet;
    };

    /**
     * username upvotes a Tweet given an ID. a user can only upvote a given Tweet once.
     * @param {string} id - ID of Tweet to upvote
     * @param {string} username - user that upvotes the Tweet
     * @return {Tweet} - (possibly) updated Tweet
     */
    that.upvoteFreet = (id, username) => {
        const tweet = that.findFreetByID(id);
        if (tweet.upvotes.indexOf(username) == -1) {
            tweet.upvotes.push(username);
        }
        return tweet;
    }

    /**
     * User undoes their upvote for a tweet. Ignores if user never upvoted in the first place.
     * @param {string} id - ID of Tweet to undo upvote
     * @param {string} username - user that is undoing their upvote for the Tweet
     * @return {Tweet} - (possibly) updated Tweet
     */
    that.undoFreetUpvote = (id, username) => {
        const tweet = that.findFreetByID(id);
        tweet.upvotes = tweet.upvotes.filter(u => u != username);
        return tweet;
    }

    /**
     * User retweets Tweet with given ID
     * Only allowed if user has is neither the author nor original author of the tweet and has not refreeted the Tweet
     * @param {string} id - ID of Tweet to refreet
     * @param {string} username - user refreeting the Tweet
     * @return {Tweet | undefined} - refreet
     */
    that.refreetFreet = (id, username) => {
        const currFreet = that.findFreetByID(id);
        if (currFreet.author == username || currFreet.og_author === username) {
            return undefined;
        }
        if (currFreet.retweets.filter(tweet => tweet.author === username).length > 0) {
            return undefined;
        }
        const newFreet = that.addFreet(currFreet.text, username, currFreet.og_author);
        currFreet.retweets.push(newFreet);
        return newFreet; 
    }

    /**
     * Updates a Tweet's author given an ID
     * @param {string} id - ID of Tweet to update
     * @param {string} newName - new author name to assign ownership of the Tweet
     * @return {Tweet} - updated Tweet object
     */
    that._updateFreetAuthor = (id, newName) => {
        const tweet = that.findFreetByID(id);
        tweet.author = newName;
        tweet.og_author = newName;
        return tweet;
    };

    /**
     * Updates a Tweet that a user has upvoted
     * @param {string} id - Tweet to be updated
     * @param {string} oldName - previous username
     * @param {string} newName - new username
     */
    that._updateFreetUpvotes = (id, oldName, newName) => {
        const tweet = that.findFreetByID(id);
        const idx = tweet.upvotes.indexOf(oldName);
        if (idx != -1) {
            tweet.upvotes[idx] = newName;
        }
    }

    Object.freeze(that);
    return that;
}

module.exports = Freets();


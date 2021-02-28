function isLoggedIn(req, res) {
    if (!req.cookies['fritter-auth']){
     res.status(403).json({ message: 'You are not signed in' }).end();
     return false;
    }
    return true;
  }
 
function matchUsername(username, res) {
   // alpha numeric
   // at least 4 characters
   if(!/^([a-zA-Z0-9])+.{3,}/.test(username)) {
     res.status(400).json(
       { message: 'Username must be alpha numeric and at least 4 characters' })
       .end();
     return false;
   }
   return true;
 }
 
function matchPassword(password, res) {
   // alpha numeric with special characters
   // include one special character @$!%*#?&
   // at least 4 characters
   if (!/^(?=.*[@$!%*#?&])([a-zA-Z0-9])+.{3,}/.test(password)) {
     res.status(400).json(
       { message: 'Password must be alpha numeric contain at least one special character '+
       '@$!%*#?& and be at least 4 characters' })
       .end();
     return false;
   }
   return true;
 }

 function matchFreet(freet, res) {
   // alpha numeric
   // allow special characters ?!.,:;'"()[\]{}!@#\$%^&*-_+=
   // at most 140 chars
   if (!/^([a-zA-Z0-9?!.,:;'"()[\]{}!@#\$%^&*-_+=])+/.test(freet)) {
     res.status(400).json({ message: 'Freet contains invalid characters'}).end();
     return false;
   }
   if (freet.length > 140){
     res.status(400).json({ message: 'Freet must be less than 140 characters'}).end();
     return false;
   }
   return true;
 }

 function matchID(id, res){
   // numeric (0-9)
   // do not allow any other characters (trailing spaces are ok)
   if(!/^([0-9])+$/.test(id)){
     res.status(400).json({ message: 'Not a valid freet ID'}).end();
     return false;
   }
   return true;
 }

 module.exports = {isLoggedIn, matchUsername, matchPassword, matchFreet, matchID}
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

require('dotenv').config(); // This allows us to use variables in .env file through process.env
const isProduction = process.env.NODE_ENV === 'production'; // process.env will be used by heroku to provide configs and NODE_ENV will be set to production there.
const history = require('connect-history-api-fallback');

const indexRouter = require('./routes/index');
const freetsRouter = require('./routes/freets');
const usersRouter = require('./routes/users');
const actionsRouter = require('./routes/actions');
const app = express();


app.use(session({
  secret: 'fritter',
  resave: true,
  saveUninitialized: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));


app.use(history());
app.use(express.static(path.join(__dirname, isProduction ? 'dist' : 'public'))); // in Heroku we want dist but for dev we want public so we don't have to rebuild everytime we change something.


app.use('/', indexRouter);
app.use('/api/freets', freetsRouter);
app.use('/api/users', usersRouter);
app.use('/api/actions', actionsRouter);

app.use('*', function (req, res) {
  res.redirect('/').end();
});

console.log("Running on localhost:3000...");

module.exports = app;

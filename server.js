const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );

const port = process.env.PORT || 5000;
app.use(express.json())

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

const models = require('./models/models');
models.sequelize.sync()
  .then(() => {
    console.log(' DB connection success. Press CTRL-C to stop\n');
  })
  .catch(err => {
    console.error(err);
    console.log(' DB connection error. Please make sure DB is running.');
    process.exit();
  });


var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var cookieSession = require('cookie-session');
var flash = require('connect-flash');

app.use(cookieSession({
  keys: ['jay_park'],
  cookie: {
    maxAge: 1000 * 60 * 60 
  }
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/users', require('./api/users/index'));
app.use('/login', require('./api/users/index'));
module.exports = app;
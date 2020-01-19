const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var cookieParser= require('cookie-parser');
var session = require('express-session')
var passport = require('passport')
const models = require('./models/models');
const port = process.env.PORT || 5000;

app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
app.use(express.json())
app.listen(port, () => console.log(`Listening on port ${port}`));

// app.get('/express_backend', (req, res) => {
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });
models.sequelize.sync()
  .then(() => {
    console.log(' DB connection success. Press CTRL-C to stop\n');
  })
  .catch(err => {
    console.error(err);
    console.log(' DB connection error. Please make sure DB is running.');
    process.exit();
  });

app.use(session({
  secret: 'howto secret key',
  resave: false,
  saveUninitialized:false
}));
app.use(passport.initialize());
app.unsubscribe(passport.session());

passport.serializeUser(function(id, done){
  connection.query('SELECT * FROM users WHERE `id`=?',[id], function(err, rows){
    var user = rows[0];
    done(err,user)
  });
});

passport.use(new LocalStrategy({
  usernameField : 'loginID',
  passwordField : 'loginPW'
}, function(loginID, loginPW, done ){
  connection.query('SELECT * FROM users WHERE `loginID`=?', [loginID], function(err, rows){
    var user = rows[0];
    if(err) {
      return done(err)
    }
    if(!user){
      return done(null, false, {message: 'Incorrect loginID'});
    }
    if(user.loginPW != loginPW){
      return done(null, fasle, {message: 'Incorrect loginPW'})
    }
    return done(null, user)
  });
}));

app.use('/users', require('./api/users/index'));
// app.use('/login', require('./api/users/index'));

// app.route('/login').get(function(req, res, next){
//   console.log(req);
//   if(req.user) {
//     res.send('already login');
//   } else {
//     res.sendFile(__dirname+ './client/src/components/SignInForm/SignIn.jsx');
//   }
// }).post(passport.authenticate('local', {
//   successRedirect:'/TrainerList',
//   failureRedirect: '/login',
//   failureFlash: true
// }))
app.post('/login', function(){console.log('post test')})

module.exports = app;
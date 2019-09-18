const express = require('express');
const router = express.Router();

var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;

router.post('/login', passport.authenticate('howto_db', {failureRedirect: '/login', failureFlash: true}),
  function (req, res) {
    res.redirect('/TrainerList');
  });

passport.use(new LocalStrategy({
  usernameField: 'loginID',
  passwordField: 'loginPW',
  passReqToCallback: true
}, function (req, loginID, loginPW, done) {
    User.findOne({loginID: loginID}, function (err, user){
        if(err) { return done(err)};
        if(!user) { 
            return done(null, false, {message : 'Incorrect login ID'});
        }
        if(!user.validPassword(loginPW)){
            return done(null, false, { message : 'Incorrect Password '})
        }
        return done(null, user);
    })}
//     console.log(loginID)
//     if(loginID === 'user001' && loginPW === 'password'){
//       return done(null, {
//         'user_id': loginID,
//       });
//     }else{
//       return done(false, null)
//     }
//   }
));

passport.serializeUser(function (user, done) {
    done(null, user)
  });

passport.deserializeUser(function (user, done) {
    done(null, user);
  });


var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');
};
router.get('/myinfo', isAuthenticated, function (req, res) {
    res.render('myinfo',{
      title: 'My Info',
      user_info: req.user
    })
  });


router.get('/Signout', function (req, res) {
  req.logout();
  res.redirect('/');
});



const trainer_controller = require('./trainer.controller');
const trainee_controller = require('./trainee.controller');

// router.get('/', (req, res) => res.send({"hello": "world"}));
router.get('/trainer', trainer_controller.index);
router.get('/trainer/:id', trainer_controller.show);
router.delete('/trainer/:id', trainer_controller.destroy);
router.post('/trainer', trainer_controller.create);
router.put('/trainer/:id', trainer_controller.update);

router.get('/trainee', trainee_controller.index);
router.post('/trainee', trainee_controller.create);

module.exports = router;
var models = require('./test-models')


exports.index = function(req, res, next) {
    res.send([{
      name: 'Chris',
    }, {
      name: 'Sam'
    }]);
  };

  exports.show = function(req, res, next) {
    if (!req.params.name) return res.send(400);
  
    models.User.findOne({
      where: {name: req.params.name}
    }).then(function (user) {
      if (!user) return res.send(404);
      res.json(user);
    }, function (err) {
      res.send(500, err);
    });
  };
  
  

  // exports.index = (req, res, next) => {
  //   models.User.findAll(
  //     { 
  //       include : [
  //         {model: models.dates,
  //         attributes : ['dates']}]
  //     }
  //     ).then(
  //       users => res.send(users))
  // };



  // exports.create = (req, res) => {
  //   const name = req.body.name
  //   const gym = req.body.gym
  //   const gender = req.body.gender
  //   const career = req.body.career
  //   const dates = req.body.dates
  //   const bodypart = req.body.bodypart
  //   const playerSource = req.body.playerSource
  //   const count = req.body.count
  //   const Num = req.body.Num
  // return Promise.all([
  //   models.User.create({
  //         name : name,
  //         gym : gym,
  //         gender : gender,
  //         career : career,
  //         bodypart : bodypart,
  //         playerSource : playerSource,
  //         count : count,
  //         Num : Num
  //       })
  // ]),
  //   models.dates.create({
  //      dates : dates
       
  //   })
  //   .then(
  //     ([id, dates])=> {
  //       return Promise.all([
  //         dates.setUser(id)
  //       ])
  //     }
  //   ).catch(error => console.log(error));
  // }
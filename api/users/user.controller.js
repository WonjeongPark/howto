const models = require('../../models/models');

  

  exports.index = (req, res, next) => {
    models.User.findAll(
      { 
        include : [
          {model: models.dates,
          attributes : ['dates']}]
      }
      ).then(
        users => res.send(users))
  };


  exports.show = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!id) {
      return res.status(400).json({error: 'Incorrect id'});
    }
  
    models.User.findOne({
      where: {
        id: id
      }
    }).then(user => {
      if (!user) {
        return res.status(404).json({error: 'No User'});
      }
  
      return res.json(user);
    });
  };
  
  exports.destroy = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!id) {
      return res.status(400).json({error: 'Incorrect id'});
    }

    models.User.destroy({
      where: {
        id: id
      }
    }).then(() => res.status(204).send());
  };
  
  exports.create = (req, res) => {
    const loginID = req.body.loginID
    const loginPW = req.body.loginPW
    const name = req.body.name
    const gym = req.body.gym
    const gender = req.body.gender
    const career = req.body.career
    const dates = req.body.dates
    const bodypart = req.body.bodypart
    const playerSource = req.body.playerSource
    const count = req.body.count
    const Num = req.body.Num

    const datesList = [];
    dates.forEach(function(dates){ datesList.push({dates}) });

    models.User.create({
      loginID : loginID,
      loginPW : loginPW,
      name : name,
      gym : gym,
      gender : gender,
      career : career,
      bodypart : bodypart,
      playerSource : playerSource,
      count : count,
      Num : Num,
      dates : datesList
      }, { 
        include : [{
          model: models.dates
          }]
      })
      .then((user) => {res.status(302).json(user)
        console.log("데이터 추가 성공");
        res.redirect("/TrainerList")
    })
      .catch( err => {
        console.log("데이터 추가 실패");
      }) 

  };

  exports.update = (req, res) => {
    res.send()
  };
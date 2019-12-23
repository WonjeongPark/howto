const models = require('../../models/models');

  

  exports.index = (req, res, next) => {
    models.User.findAll(
      {
        include: [{
        model: models.Trainee
      }]
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
    const email = req.body.email
    const local = req.body.local
    const gender = req.body.gender
    const prg = req.body.prg
    const age = req.body.age
    const bodytarget = req.body.bodytarget
    const purpose = req.body.purpose
    const week = req.body.week
    const times = req.body.times

    models.User.create({
      loginID : loginID,
      loginPW : loginPW,
      name : name,
      email : email,
      local : local,
      gender : gender,
      // Trainee -> trainee ( tablename : trainees X)
      trainee : 
      {prg : prg,
        age : age,
        bodytarget : bodytarget,
        purpose : purpose,
        week : week,
        times : times}
      },{
        include: [{
          model: models.Trainee,
        }]
      })
      .catch( err => {
        console.log("데이터 추가 실패 : ", err);
      })
      .then((user) => {res.status(302).json(user)
        console.log("데이터 추가 성공");
    })

  };

  exports.update = (req, res) => {
    res.send()
  };
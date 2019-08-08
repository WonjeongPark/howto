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
  
    // const userIdx = users.findIndex(user => user.id === id);
    // if (userIdx === -1) {
    //   return res.status(404).json({error: 'Unknown user'});
    // }
  
    // users.splice(userIdx, 1);
    // res.status(204).send();
  };
  
  exports.create = (req, res) => {
    const name = req.body.name || '';
    console.log(name)
    if (!name.length) {
      return res.status(400).json({err: 'Incorrect name'});
    }
    const gym = req.body.gym || '';
    console.log(gym)
    if (!gym.length) {
      return res.status(400).json({err: 'Incorrect gym'});
    }
    const gender = req.body.gender || '';
    console.log(gender)
    if (!gender.length) {
      return res.status(400).json({err: 'Incorrect gender'});
    }
    const career = req.body.career || '';
    console.log(career)
    if (!career.length) {
      return res.status(400).json({err: 'Incorrect career'});
    }
    const dates = req.body.dates || '';
    console.log(dates)
    if (!dates.length) {
      return res.status(400).json({err: 'Incorrect dates'});
    }
    const bodypart = req.body.bodypart || '';
    console.log(bodypart)
    if (!bodypart.length) {
      return res.status(400).json({err: 'Incorrect bodypart'});
    }
    const playerSource = req.body.playerSource || '';
    console.log(playerSource)
    if (!playerSource.length) {
      return res.status(400).json({err: 'Incorrect playerSource'});
    }
    const count = req.body.count || '';
    console.log(count)
    if (!count.length) {
      return res.status(400).json({err: 'Incorrect count'});
    }
    const Num = req.body.Num || '';
    console.log(Num)
    if (!Num.length) {
      return res.status(400).json({err: 'Incorrect Num'});
    }
    
    
    // const datesList = dates.map({dates : dates})
    // console.log(datesList)
    models.User.create({
      name : name,
      gym : gym,
      gender : gender,
      career : career,
      bodypart : bodypart,
      playerSource : playerSource,
      count : count,
      Num : Num,
      // createdAt : new Date(),
      // updatedAt : new Date(),
      //  },{
      //   include: [{
      //       model: models.dates, 
      //       include: [models.dates]
      //   }]
      dates : [
        // dates.map(dates => {dates : dates})
        {dates : dates}
        // dates 가 array이니 join table에 넣는 법 검색
      ]
      }, { 
        include : [ Dates
          // {association: User.dates,
          // include: [ dates.dates ]}
        ]
      })
      // .then(user => user.addDates(dates))
      // .then(models.dates.bulkCreate(dates))
      .then((user) => {res.status(201).json(user)
        console.log("데이터 추가 성공");
        // res.redirect("/users")
    })
      .catch( err => {
        console.log("데이터 추가 실패");
      }) 
    // models.dates.Create({
    //   users_id : id,
    //   dates : dates
    // 배열 dates -> 각각 id, dates로 저장하는 법 찾기
    // })
  };


  exports.update = (req, res) => {
    res.send()
  };
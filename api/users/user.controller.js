  
  const models = require('../../models');
  

  exports.index = (req, res) => {
    models.User.findAll()
      .then(users => res.json(users));
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
    if (!name.length) {
      return res.status(400).json({error: 'Incorrenct name'});
    }
    const gym = req.body.gym || '';
    if (!gym.length) {
      return res.status(400).json({error: 'Incorrenct gym'});
    }
    const gender = req.body.gender || '';
    if (!gender.length) {
      return res.status(400).json({error: 'Incorrenct gender'});
    }
    const career = req.body.career || '';
    if (!career.length) {
      return res.status(400).json({error: 'Incorrenct career'});
    }
    const dates = req.body.dates || '';
    if (!dates.length) {
      return res.status(400).json({error: 'Incorrenct dates'});
    }
    const bodypart = req.body.bodypart || '';
    if (!bodypart.length) {
      return res.status(400).json({error: 'Incorrenct bodypart'});
    }
    const playerSource = req.body.playerSource || '';
    if (!playerSource.length) {
      return res.status(400).json({error: 'Incorrenct playerSource'});
    }
    const count = req.body.count || '';
    if (!count.length) {
      return res.status(400).json({error: 'Incorrenct count'});
    }
    const setNum = req.body.setNum || '';
    if (!setNum.length) {
      return res.status(400).json({error: 'Incorrenct set'});
    }
    

    models.User.create({
      name : name,
      gym : gym,
      gender : gender,
      career : career,
      dates : dates,
      bodypart : bodypart,
      playerSource : playerSource,
      count : count,
      setNum : setNum
      }).then((user) => res.status(201).json(user))
    };

  //   const id = users.reduce((maxId, user) => {
  //     return user.id > maxId ? user.id : maxId
  //   }, 0) + 1;
  //   const newUser = {
  //     id: id,
  //     name: name
  //   };
  //   users.push(newUser);
  //   return res.status(201).json(newUser);
  // };

  exports.update = (req, res) => {
    res.send()
  };
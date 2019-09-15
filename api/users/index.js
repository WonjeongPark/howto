const express = require('express');
const router = express.Router();

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
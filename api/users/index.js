const express = require('express');
const router = express.Router();

const controller = require('./user.controller');

// router.get('/', (req, res) => res.send({"hello": "world"}));
router.get('/', controller.index);
// router.get('/dates/:id', controller.dates);
router.get('/:id', controller.show);
router.delete('/:id', controller.destroy);
router.post('/', controller.create);
router.put('/:id', controller.update);

module.exports = router;
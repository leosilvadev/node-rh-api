'use strict';

var router = require('express').Router();
var controller = require('./controller');

router.post('/', controller.register);
router.get('/', controller.list);
router.get('/:employeeId', controller.find);
router.delete('/:employeeId', controller.fire);

module.exports = router;

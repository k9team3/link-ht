'use strict';

var express = require('express');
var controller = require('./entity.controller');

var router = express.Router();

router.post('/', controller.search);
router.get('/:id', controller.show);
router.get('/:id/byPhone', controller.byPhone);
router.get('/:id/byImage', controller.byImage);
router.get('/:id/byText', controller.byText);
router.get('/:id/linked', controller.linked);
router.get('/:id/save', controller.getSaved);
router.post('/:id/save', controller.save);
router.post('/', controller.create);
//router.get('/search', controller.search);
//router.put('/:id', controller.update);
//router.patch('/:id', controller.update);
//router.delete('/:id', controller.destroy);

module.exports = router;
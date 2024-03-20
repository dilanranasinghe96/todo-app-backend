const UserController = require('../controller/user.controller');

const router = require('express').Router();


router.post('/registration',UserController.register);

module.exports = router;
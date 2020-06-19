var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.controller');

router
    .post('/createUser', userController.createUser)
    .post('/login', userController.loginUser)
    .get('/isLoggedIn', userController.isLoggedIn)

module.exports = router;

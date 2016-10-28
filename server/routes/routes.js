// Setup dependences
var express = require('express');
var router = express.Router();
var path = require('path');
var twitterApiController = require('../controllers/twitterApiController.js');
var UserController = require('../controllers/userController.js');
var passport = require('passport');

var isLoggedIn = function(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/signup');
};
/* GET Request for index page. */
router.get('/', isLoggedIn, function(req, res, next) {
    res.sendFile(path.join(__dirname, '../../client/views/index.html'));
});

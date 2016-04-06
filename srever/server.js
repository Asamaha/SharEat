// Setup server dependencies
var express = require('express');
var path = require('path');
var favicon = require('favicon');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require("passport");
var session = require('express-session');
var TwitterStrategy =  require("passport-twitter").Strategy;
var routes = require('./routes/routes.js');
var socketio = require('socket.io');
var TwitterAPI = require('./controllers/twitterApiController.js');
var textSearch = require('./textSearch.js');

// **Important password and keys **
if(!process.env.CONSUMER_KEY){
  var KEYS = require('../config.js');
}
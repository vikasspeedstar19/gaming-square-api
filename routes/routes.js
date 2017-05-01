var express = require('express');
var app = express.Router();
var auth = require('../controllers/test.controller');
var gamingSquareMainList = require('../controllers/gaming_square_main_list_controller');

app.post('/test',auth.test);
app.post('/getall',auth.getall);
app.get('/getgamingsquaremainlist',gamingSquareMainList.getGamingSquareMainList);
app.post('/postgamingsquaremainlist',gamingSquareMainList.postGamingSquareMainList);
app.post('/deleteGamingSquareMainList',gamingSquareMainList.deleteGamingSquareMainList);
module.exports = app;
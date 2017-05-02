var express = require('express');
var app = express.Router();
var auth = require('../controllers/test.controller');
var gamingSquareMainList = require('../controllers/gaming_square_main_list_controller');

app.post('/test',auth.test);
app.post('/getall',auth.getall);
app.get('/getgamingsquaremainlist',gamingSquareMainList.getGamingSquareMainList);
app.post('/getgamingsquaremainsortedlist',gamingSquareMainList.getGamingSquareMainSortedList);
app.post('/getgamingsquaretop100list',gamingSquareMainList.getGamingSquareTop100List);
app.post('/getgamingsquareexclusivepclist',gamingSquareMainList.getGamingSquareExclusivePCList);
app.post('/getgamingsquareexclusivepslist',gamingSquareMainList.getGamingSquareExclusivePSList);
app.post('/getgamingsquareexclusivexboxlist',gamingSquareMainList.getGamingSquareExclusiveXBOXList);
app.post('/postgamingsquaremainlist',gamingSquareMainList.postGamingSquareMainList);
app.post('/deleteGamingSquareMainList',gamingSquareMainList.deleteGamingSquareMainList);
module.exports = app;

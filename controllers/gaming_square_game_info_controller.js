var express = require('express');
var app = express();
var util = require('../utility/util');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var error_handle = require('../error_handler/error_handler');
var GamingSquareGameInfo = require('../models/gaming_square_game_info_model');

exports.gamingSquareGameInfo = function(req, res){
	GamingSquareGameInfo.findOne({"game_id":req.body.game_id},{"game_info":1,"_id":false},function(err, data){
		error_handle.post_error_handler(res, err ,data);
	});
}

exports.gamingSquareGameOverview = function(req, res){
	GamingSquareGameInfo.findOne({"game_id":req.body.game_id},{"overview":1,"_id":false},function(err, data){
		error_handle.post_error_handler(res, err, data);
	});
}

exports.gamingSquareGameStory = function(req, res){
	GamingSquareGameInfo.findOne({"game_id":req.body.game_id},{"story":1,"_id":false},function(err, data){
		error_handle.post_error_handler(res, err, data);
	});
}

exports.gamingSquareGameExtra = function(req, res){
	GamingSquareGameInfo.findOne({"game_id":req.body.game_id},{"platforms":1,"_id":false},function(err, data){
		error_handle.post_error_handler(res, err, data);
	});
}

exports.gamingSquareGameRatings = function(req, res){
	GamingSquareGameInfo.findOne({"game_id":req.body.game_id},{"ratings":1,"_id":false},function(err, data){
		error_handle.post_error_handler(res, err, data);
	});
}

exports.gamingSquareGameScreenshots = function(req, res){
	GamingSquareGameInfo.findOne({"game_id":req.body.game_id},{"sreenshots":1,"_id":false},function(err, data){
		error_handle.post_error_handler(res, err, data);
	});
}

/*
app.post('/getgamingsquaregameinfoinfo',gamingSquareGameInfo.gamingSquareGameInfo);   DONE
app.post('/getgamingsquaregameinfooverview',gamingSquareGameInfo.gamingSquareGameOverview);  DONE
app.post('/getgamingsquaregameinfostory',gamingSquareGameInfo.gamingSquareGameStory); 
app.post('/getgamingsquaregameinfoextra',gamingSquareGameInfo.gamingSquareGameExtra);
app.post('/getgamingsquaregameinforatings',gamingSquareGameInfo.gamingSquareGameRatings);
app.post('/getgamingsquaregameinfoscreenshots',gamingSquareGameInfo.gamingSquareGameScreenshots);
*/
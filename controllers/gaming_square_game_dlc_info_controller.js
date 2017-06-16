var express = require('express');
var app = express();
var util = require('../utility/util');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var error_handle = require('../error_handler/error_handler');
var GamingSquareGameDLCInfo = require('../models/gaming_square_game_dlc_info_model');

exports.gamingSquareGameDLCInfo = function(req, res){
	console.log("The res is : ",req.body.game_dlc_id);
	GamingSquareGameDLCInfo.findOne({"game_dlc_id":req.body.game_dlc_id},function(err, data){
		error_handle.post_error_handler(res, err, data);
	});
}
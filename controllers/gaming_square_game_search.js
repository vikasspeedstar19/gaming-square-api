var express = require('express');
var app = express();
var util = require('../utility/util');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var GamingSquareMainListModel = require('../models/gaming_square_main_list_model');
var error_handle = require('../error_handler/error_handler');


//new RegExp(country, 'i')

exports.gamingSquareGameSearch = function(req, res){
	console.log("The Input is : ",req.body.game_name);
	if(req.body.game_name.length == 0){
		res.send("Invalid Input");
	}
	else{
	GamingSquareMainListModel.find({"game_name": new RegExp(req.body.game_name, 'i')},{"game_id":1,"game_name":1, "_id":false},function(err,data){
		error_handle.post_error_handler(res, err, data);
	});	
	}
}
var express = require('express');
var app = express();
var util = require('../utility/util');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

exports.get_error_handler = function(res, err, data){
    	if(!err){
	res.json(data);	
	}
	else{
	console.log(err);
	res.send("Error Occured");
	}
}

exports.post_error_handler = function(res, err, data){
	if(!err){
	console.log("You Reached Here Man...!!!");
	res.json(data);
	}
	else{
	console.log(err);
	res.send("Error Occured");
	}
}

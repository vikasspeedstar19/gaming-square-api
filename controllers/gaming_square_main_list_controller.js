var express = require('express');
var app = express();
var util = require('../utility/util');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var crypto = require('crypto');
var validator = require('email-validator');
var jwt = require("jsonwebtoken");
var GamingSquareMainListModel = require('../models/gaming_square_main_list_model');
var error_handle = require('../error_handler/error_handler');

exports.postGamingSquareMainList = function(req,res){

    console.log("The object is : "+req.body.game_id);

    var gamingSquareMainListModel = new GamingSquareMainListModel({
        game_id : req.body.game_id,
        game_name : req.body.game_name,
        game_publisher : req.body.game_publisher,
        game_rating : req.body.game_rating,
        game_platforms : {PC : req.body.game_platforms.PC,PS : req.body.game_platforms.PS,XBOX : req.body.game_platforms.XBOX},
        game_release_date : req.body.game_release_date,
        game_img_url : req.body.game_img_url
    });
    gamingSquareMainListModel.save(function(err){
        if(err){
            console.log(err);
            res.send("Error Occured");
        }
        else{
            res.send("Data Saved");
        }
    });
}


exports.getGamingSquareMainList = function(req, res){
    GamingSquareMainListModel.find({},{"_id":false},function(err, data){
         error_handle.get_error_handler(res, err, data);
    });
}

exports.getGamingSquareMainSortedList = function(req, res){
    
GamingSquareMainListModel.find({},{"_id":false}).sort({"game_release_date":-1}).exec(function(err, data){
	error_handle.get_error_handler(res, err, data);	
});
}

exports.getGamingSquareTop100List = function(req, res){
	
GamingSquareMainListModel.find({},{"_id":false}).sort({"game_rating":-1}).limit(10).exec(function(err, data){
        error_handle.get_error_handler(res, err, data);
});	
}

exports.getGamingSquareExclusivePCList = function(req, res){
GamingSquareMainListModel.find({$and:[{"game_platforms.XBOX":false},{"game_platforms.PS":false},{"game_platforms.PC":true}]},{"_id":false},function(err,data){
	error_handle.get_error_handler(res, err, data);
});
}

exports.getGamingSquareExclusivePSList = function(req, res){
GamingSquareMainListModel.find({$and:[{"game_platforms.PC":false},{"game_platforms.PS":true},{"game_platforms.XBOX":false}]},{"_id":false},function(err,data){error_handle.get_error_handler(res, err, data);
});
}

exports.getGamingSquareExclusiveXBOXList = function(req, res){
GamingSquareMainListModel.find({$and:[{"game_platforms.PC":false},{"game_platforms.PS":false},{"game_platforms.XBOX":true}]},{"_id":false},function(err,data){            error_handle.get_error_handler(res, err, data);
});
}


exports.deleteGamingSquareMainList = function(req, res){
    GamingSquareMainListModel.remove({},function(err, data){
         error_handle.get_error_handler(res, err, data);
    });
}
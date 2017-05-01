var express = require('express');
var app = express();
var util = require('../utility/util');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var crypto = require('crypto');
var validator = require('email-validator');
var jwt = require("jsonwebtoken");
var GamingSquareMainListModel = require('../models/gaming_square_main_list_model');

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
    GamingSquareMainListModel.find({},function(err, data){
         if(err){
            console.log(err);
            res.send("Error Occured");
        }
        else{
            res.json(data);
        }
    });
}

exports.deleteGamingSquareMainList = function(req, res){
    GamingSquareMainListModel.remove({},function(err, data){
         if(err){
            console.log(err);
            res.send("Error Occured");
        }
        else{
            res.json(data);
        }
    });
}
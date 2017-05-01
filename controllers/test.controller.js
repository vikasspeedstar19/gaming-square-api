var express = require('express');
var app = express();
var util = require('../utility/util');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var crypto = require('crypto');
var validator = require('email-validator');
var jwt = require("jsonwebtoken");
var Test = require('../models/test.model');

exports.data = function(req,res){
    res.send("Api Works...!");
}

exports.test = function(req,res){
    console.log("The res obj is",req.body.test);
    var test = new Test({test1 : req.body.test1});
    test.save(function(err){
        if(err){
            console.log(err);
            res.send("Error Occured");
        }
        else{
            res.send("Data Saved");
        }
    });
}

exports.getall = function(req, res){
    Test.find({},function(err, data){
         if(err){
            console.log(err);
            res.send("Error Occured");
        }
        else{
            res.json(data);
        }
    });
}
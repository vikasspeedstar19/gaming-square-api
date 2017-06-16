var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var router = require('router');

var gamingSquareGameDLCInfo = new Schema({
    game_dlc_id : {type : String, required : true},
	game_dlc_name : { type : String, required : true },
    dlc_overview : { type : String, required : true },
    dlc_rating  : [{
        rating_dlc_name: { type : String, required : true },
        rating_dlc_value: { type : Number, required : true }
    }],
    dlc_story    : { type : String, required : true }
});

var GamingSquareGameDLCInfo = mongoose.model("GamingSquareGameDLCInfo",gamingSquareGameDLCInfo,"GamingSquareGameDLCInfo");
module.exports = GamingSquareGameDLCInfo;
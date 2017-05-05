var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var router = require('router');

var gamingSquareGameInfo = new Schema({
    game_id : {type : String, required : true},
	game_name : { type : String, required : true },
    game_info : {
                    developer : { type : String, required : true },
                    game_modes : { type : String, required : true },
                    genre : { type : String, required : true },
                    player_view : { type : String, required : true },
                    publisher : { type : String, required : true },
                    release_dates : { type : Date, required : true }
                },
    overview : { type : String, required : true },
    ratings  : { type : String, required : true },
    story    : { type : String, required : true },
    extra    : {
                    platforms : { type : String, required : true },
                    dlc : { type : String, required : true }
               }
});

var GamingSquareGameInfo = mongoose.model("GamingSquareGameInfo",gamingSquareGameInfo,"GamingSquareGameInfo");
module.exports = GamingSquareGameInfo;
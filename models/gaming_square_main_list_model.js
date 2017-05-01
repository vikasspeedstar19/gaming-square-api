var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var router = require('router');

var gamingSquareMainList = new Schema({
	game_id : { type : String, required : true },
    game_name : { type : String, required : true },
    game_publisher : { type : String, required : true },
    game_rating : { type : Number, required : true },
    game_platforms : {
        PC: {type : Boolean},
        PS: {type : Boolean},
        XBOX: {type : Boolean}},
    game_release_date : {type : Date, required : true},
    game_img_url : {type : String, required : true}
});

var GamingSquareMainList = mongoose.model("GamingSquareMainList",gamingSquareMainList,"GamingSquareMainList");
module.exports = GamingSquareMainList;
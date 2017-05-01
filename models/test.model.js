var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var router = require('router');

var testSchema = new Schema({
	test1 : { type : String, required: true }
});

var Test = mongoose.model("Test",testSchema);
module.exports = Test;
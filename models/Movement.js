var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movementData = new Schema({
    // c g w
    movement_type : String,
    movement_name : String,
    movement_count : Number
});

var movement = mongoose.model('movement', movementData, 'movements');

module.exports = movement;
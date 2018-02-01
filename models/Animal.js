var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var animalData = new Schema({
    name : String,
    age : Number,
    breed : String,
    gender : String,
    neutral : String,
    weight : String,
    note : String
});

var animal = mongoose.model('animal', animalData, 'animals');

module.exports = animal;
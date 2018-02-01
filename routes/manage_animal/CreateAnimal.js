var express = require('express');
var router = express.Router();
var animal = require('../../models/Animal');

router.post('/', function(req, res){
    var recv_data = req.body;

    var name = recv_data.name;
    var age = recv_data.age;
    var breed = recv_data.breed;
    var gender = recv_data.gender;
    var neutral = recv_data.neutral;
    var weight = recv_data.weight;
    var note = recv_data.note;

    animal.find({name: name}, function(err, doc){
        if(err){
            console.error(err.message);
        }
        if(doc.length == 0){
            var new_animal = new animal();
            new_animal.name = name;
            new_animal.age = age;
            new_animal.breed = breed;
            new_animal.gender = gender;
            new_animal.neutral = neutral;
            new_animal.weight = weight;
            new_animal.note = note;
            new_animal.save();

            var res_data = new Object();
            res_data.code = "9999";
            res_data.message = "animal is registered";

            res.send(res_data);
            res.end();
        }
        else{
            var res_data = new Object();
            res_data.code = "8888";
            res_data.message = "animal is already exist";

            res.send(res_data);
            res.end();
        }
    })

});

module.exports = router;
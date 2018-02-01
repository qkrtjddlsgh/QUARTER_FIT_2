var express = require('express');
var router = express.Router();
var animal = require('../../models/Animal');

router.post('/', function(req, res){
    var recv_data = req.body;

    var name = recv_data.name;

    animal.find({name: name}, function(err, doc){
        if(err){
            console.error(err.message);
        }
        if(doc.length == 0){
            var res_data = new Object();
            res_data.code = "8888";
            res_data.message = "animal is not exist";

            res.send(res_data);
            res.end();
        }
        else{
            var add_data = new Object();
            add_data.name = doc[0].name;
            add_data.age = doc[0].age;
            add_data.breed = doc[0].breed;
            add_data.gender = doc[0].gender;
            add_data.neutral = doc[0].neutral;
            add_data.weight = doc[0].weight;
            add_data.note = doc[0].note;

            var res_data = new Object();
            res_data.response = add_data;

            res.send(res_data);
            res.end();
        }
    })

});

module.exports = router;
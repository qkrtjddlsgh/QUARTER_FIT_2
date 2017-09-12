var express = require('express');
var router = express.Router();
var movement = require('../../models/Movement');

router.post('/', function(req, res){
    var recv_data = req.body;

    var movement_name = recv_data.movement_name;

    movement.find({movement_name: movement_name}, function(err, doc){
        if(err){
            console.error(err.message);
        }
        if(doc.length == 0){
            var res_data = new Object();
            res_data.code = "8888";
            res_data.message = "Movement_name is not exist";

            res.send(res_data);
            res.end();
        }
        else{
            var new_count = doc[0].movement_count - 1;
            var query = {$set: {movement_count: new_count}};

            movement.update({movement_name: movement_name}, query, function(err, result){
                if(err){
                    console.error(err.message);
                }
                else{
                    var add_data = new Object();
                    add_data.movement_name = movement_name;
                    add_data.movement_count = new_count;

                    var res_data = new Object();
                    res_data.code = "9999";
                    res_data.response = add_data;

                    res.send(res_data);
                    res.end();
                }
            })
        }
    })
});

module.exports = router;
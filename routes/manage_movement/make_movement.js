var express = require('express');
var router = express.Router();
var movement = require('../../models/Movement');

router.post('/', function(req, res){
    var recv_data = req.body;

    var movement_type = recv_data.movement_type;
    var movement_name = recv_data.movement_name;

    movement.find({movement_type: movement_type, movement_name: movement_name}, function(err, doc){
        if(err){
            console.error(err.message);
        }
        if(doc.length == 0){
            var new_movement = new movement();
            new_movement.movement_type = movement_type;
            new_movement.movement_name = movement_name;
            new_movement.movement_count = 0;
            new_movement.save();

            var res_data = new Object();
            res_data.code = "9999";
            res_data.message = "Movement is registered";

            res.send(res_data);
            res.end();
        }
        else{
            var res_data = new Object();
            res_data.code = "8888";
            res_data.message = "Movement is already exist";

            res.send(res_data);
            res.end();
        }
    })

});

module.exports = router;
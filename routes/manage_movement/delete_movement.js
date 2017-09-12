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
            var res_data = new Object();
            res_data.code = "8888";
            res_data.message = "Movement is not exist";
        }
        else{
            movement.remove({movement_type: movement_type, movement_name: movement_name}, function(err, result){
                if(err){
                    console.error(err.message);
                }
                else{
                    var res_data = new Object();
                    res_data.code = "9999";
                    res_data.message = "Movement is removed";

                    res.send(res_data);
                    res.end();
                }
            })
        }
    })

});

module.exports = router;
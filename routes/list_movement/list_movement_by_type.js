var express = require('express');
var router = express.Router();
var movement = require('../../models/Movement');

router.post('/', function(req, res){
    var recv_data = req.body;

    var movement_type = recv_data.movement_type;

    // count 내림차순 정렬
    movement.find({movement_type: movement_type}).sort({movement_count: -1, movement_name: 1}).exec(function(err, doc){
        if(err){
            console.error(err.message);
        }
        if(doc.length == 0){
            var res_data = new Object();
            res_data.code = "8888";
            res_data.message = "No movement_list";

            res.send(res_data);
            res.end();
        }
        else{
            var res_data = new Object();
            res_data.code = "9999";

            var add_data = new Object();
            add_data.result = doc;

            res_data.response = add_data;
            res.send(res_data);
            res.end();
        }
    })
});

module.exports = router;
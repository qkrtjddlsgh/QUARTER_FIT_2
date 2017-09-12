var express = require('express');
var router = express.Router();
var movement = require('../../models/Movement');

router.post('/', function(req, res){
    var reset_count = 0;
    var query = {$set: {movement_count: reset_count}};

    movement.find().sort("submitted").exec(function(err, doc){
       if(err){
           console.error(err.message);
       }
       else{
           var count = doc.length;

           for(var i=0; i<count; i++){
               movement.update({movement_name: doc[i].movement_name}, query, function(err, result){
                   if(err){
                       console.error(err.message);
                   }
               });
           }

           var res_data = new Object();
           res_data.code = "9999";
           res_data.message = "Reset Zero";

           res.send(res_data);
           res.end();
       }
    });
});

module.exports = router;

var mongoose = require('mongoose');
var order = mongoose.model('Order');

module.exports = {
	show: function(req, res){
		order.find({}, function(err, orders){
			if(err){
				console.log('error');
			}
			else{
				console.log('success');
				res.json(orders);
			}
		})
	}, 
	add: function(req, res){
		console.log('hello from add order!', req.body.name, req.body.product, req.body.qty, req.body.created_at)
		var new_order = new order(req.body);
		new_order.save(function(err){
			if(err){
				console.log('failed to add to database!');
			}else{
				console.log('successfully added to the database');
				res.redirect('/order')
			}
		})
	}, 
	remove: function(req, res){
		// console.log(req.body)
		order.remove({ _id: req.body._id }, function(err){
			if(err){
				console.log('error');
			}
			else{
				console.log('successfully removed', req.body.name, 'from the DB')
				res.redirect('/order');
			}
		})

	}

}
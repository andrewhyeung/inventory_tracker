var mongoose = require('mongoose');
var customer = mongoose.model('Customer');

module.exports = {
	show_all: function(req, res){
		// console.log('rendering..')
		customer.find({}, function(err, customers){
			if(err){
				console.log('error');
			}
			else{
				console.log('success');
				res.json(customers);
			}
		})
	}, 
	add: function(req, res){
		console.log('hello from add customer!', req.body)
		var new_customer = new customer(req.body);
		new_customer.save(function(err){
			if(err){
				console.log('fail to add to database!');
			}else{
				console.log('successfully added to the database');
				res.redirect('/customer')
			}
		})
	}, 
	remove: function(req, res){
		// console.log(req.body)
		customer.remove({ _id: req.body._id }, function(err){
			if(err){
				console.log('error');
			}
			else{
				console.log('successfully removed', req.body, 'from the DB')
				res.redirect('/customer');
			}
		})

	}
}
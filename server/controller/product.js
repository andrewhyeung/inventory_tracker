var mongoose = require('mongoose');
var product = mongoose.model('Product');

module.exports = {
	show: function(req,res){
		console.log('hit this route');
		product.find({}, function(err, products){
			if(err){
				console.log('error');
			}
			else{
				console.log('success in showing products');
				res.json(products);
			}

		})
	}, 
	add: function(req, res){
		console.log('hello from adding product!', req.body)
		var new_product = new product(req.body);
		new_product.save(function(err){
			if(err){
				console.log('fail to add to database!');
			}else{
				console.log('successfully added to the database');
				res.redirect('/product')
			}
		})
	}

}
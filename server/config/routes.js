var customer = require('./../controller/customer.js')
var order = require('./../controller/order.js')
var product = require('./../controller/product.js')
module.exports = function(app){
	app.get('/customer', function(req,res){
		// console.log('got to the route')
		customer.show_all(req, res);
	})
	app.post('/addCustomer', function(req, res){
		customer.add(req,res);
	})
	app.post('/removeCustomer', function(req, res){
		customer.remove(req,res);
	})
	app.get('/order', function(req, res){
		order.show(req,res);
	})
	app.post('/addOrder', function(req, res){
		order.add(req,res);
	})
	app.post('/removeOrder', function(req, res){
		order.remove(req,res);
	})
	app.get('/product', function(req, res){
		product.show(req, res);
	})
	app.post('/addProduct', function(req, res){
		product.add(req,res);
	})
}
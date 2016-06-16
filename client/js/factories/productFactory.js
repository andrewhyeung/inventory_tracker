myApp.factory('productFactory', function($http){
	var factory = {};
	var products = [];
	factory.getProducts = function(callback){
		$http.get('/product').success(function(output){
			products = output;
			callback(products);
		})
	}
	factory.addProduct = function(new_product, callback){
		$http.post('/addProduct', new_product).success(function(output){
			products = output;
			callback(products);
		})
	}
	return factory;
})
myApp.controller('productController', function($scope, productFactory, orderFactory){
	productFactory.getProducts(function(data){
		$scope.products = data;
		console.log('products from http: ', $scope.products);
	});
	orderFactory.getOrders(function(data){
		$scope.orders = data;
	});
	$scope.addProduct = function(){
		console.log($scope.new_product);
		productFactory.addProduct($scope.new_product, function(data){
			$scope.products = data;
			$scope.new_product = {};		
		})
	}
})
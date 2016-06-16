myApp.controller('dashboardController', function($scope, customerFactory, orderFactory, productFactory){			
			customerFactory.getCustomers(function(data){
				$scope.customers = data;
			});
			orderFactory.getOrders(function(data){
				$scope.orders = data;
			});
			productFactory.getProducts(function(data){
				$scope.products = data;
			});

		})
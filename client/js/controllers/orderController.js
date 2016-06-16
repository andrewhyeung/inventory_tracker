myApp.controller('orderController', function($scope, customerFactory, orderFactory, productFactory){			
			customerFactory.getCustomers(function(data){
				$scope.customers = data;
			});
			orderFactory.getOrders(function(data){
				$scope.orders = data;
			});
			productFactory.getProducts(function(data){
				$scope.products = data;
				console.log('products from http: ', $scope.products);
			});

			$scope.addOrder = function(){
				console.log($scope.new_order)
				$scope.new_order.created_at = new Date();
				orderFactory.addOrder($scope.new_order, function(data){
					$scope.orders = data;
					$scope.new_order = {};
				});
			}
			$scope.removeOrder = function(order){
				orderFactory.removeOrder(order, function(data){
					$scope.orders  = data;
				})
			}	
		})
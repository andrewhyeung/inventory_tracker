myApp.controller('customerController', function($scope, customerFactory){			
			$scope.dup_msg = "";
			customerFactory.getCustomers(function(data){
				$scope.customers = data;
			});
			$scope.addCustomer = function(){
				if($scope.isDuplicate()){
					$scope.dup_msg ="can\'t add because its already used";
				}
				else{
					$scope.new_customer.created_at = new Date();
					customerFactory.addCustomer($scope.new_customer, function(data){
						$scope.customers = data;
						$scope.new_customer = {};
					});
				}	
			}	
			$scope.removeCustomer = function(customer){
				customerFactory.removeCustomer(customer, function(data){
					$scope.customers  = data;
				})
			}
			$scope.isDuplicate = function(){
				for(var i=0;i<$scope.customers.length;i++){
					if($scope.new_customer !== undefined){
						if($scope.new_customer.name == $scope.customers[i].name){
							$scope.dup_msg = "name is already used!";
							return true;
						}
					}
				}
				return false; 
			}
		})
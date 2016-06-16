myApp.factory('customerFactory', function($http){
			var factory = {};
			var customers = [];
			factory.getCustomers = function(callback){
				$http.get('/customer').success(function(output){
					customers = output;
					callback(customers);
				});}
			factory.addCustomer = function(new_customer, callback){
				$http.post('/addCustomer', new_customer).success(function(output){
					customers = output;
					callback(customers);
				});}
			factory.removeCustomer = function(customer, callback){	
				$http.post('/removeCustomer', customer).success(function(output){
					customers = output;
					callback(customers);
				});}
			return factory;})
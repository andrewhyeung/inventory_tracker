myApp.config(function($routeProvider){
			$routeProvider
				.when('/', {
					templateUrl: 'static/partials/dashboard.html'})		
				.when('/orders', {
					templateUrl: 'static/partials/orders.html'})
				.when('/products',{
					templateUrl: 'static/partials/products.html'})
				.when('/customers', {
					templateUrl: 'static/partials/customers.html'})
				.otherwise({
					redirectTo: '/'})
		})
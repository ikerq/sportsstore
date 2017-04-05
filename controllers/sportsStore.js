angular.module("sportsStore")
	.constant("dataUrl", "http://localhost:5500/products")
	.controller("sportsStoreCtrl", function($scope, $http, dataUrl){
		$scope.data = {};
		$http.get(dataUrl)
			.then(function (response) {
				$scope.data.products = response.data;
			},
			function (error) {
				$scope.data.error = error;
			});
		/*$scope.data = {
			products: [
				{name: "Product #1", description: "A product", category:"Category #1", price: 100},
				{name: "Product #2", description: "A product", category:"Category #2", price: 110},
				{name: "Product #3", description: "A product", category:"Category #3", price: 210},
				{name: "Product #4", description: "A product", category:"Category #4", price: 202}
			]
		};*/
	});
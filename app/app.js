        angular.module('calculatorApp', []);

        // Registers a controller to our module 'calculatorApp'.
        angular.module('calculatorApp').controller('CalculatorController', function CalculatorController($scope) {
          $scope.add=add;
		  $scope.mul=mul;
		  
		  function add(a,b)
		  {
			  return a+b;
		  }
		  function mul(a,b)
		  {
			  return a*b;
		  }
        });


		
/*
angular.module('myApp', [])
.filter('reverse',[function(){
	return function (string)
	{
		return string;
	}
}])
.controller("myCtrl",function(){
	
});

*/

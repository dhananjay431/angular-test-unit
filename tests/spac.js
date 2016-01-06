describe('calculator', function () {

    beforeEach(angular.mock.module('calculatorApp'));

    var $controller;

    beforeEach(angular.mock.inject(function(_$controller_){
      $controller = _$controller_;
    }));

    describe('mul', function () {
        it('5*6=30', function () {
            var $scope = {};
            var controller = $controller('CalculatorController', { $scope: $scope });
            
            expect($scope.mul(5,8)).toBe(30);
        }); 
    });

	describe('add', function () {
        it('5+6=11', function () {
            var $scope = {};
            var controller = $controller('CalculatorController', { $scope: $scope });
            
            expect($scope.add(6,6)).toBe(13);
        }); 
    });

});
/*
describe('Filters', function() {
  beforeEach(module('myApp'));

  describe('reverse', function() {
	  var reverse;
    beforeEach(inject(function($filter) {
      reverse=$filter('reverse',{});
    }));
    it('should replace VERSION', function() {
      expect(reverse('dhananjay')).toBe('dhananjay');
    });
  });
});
*/

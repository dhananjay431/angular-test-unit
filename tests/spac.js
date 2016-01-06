describe('mediPlus', function () {

    beforeEach(angular.mock.module('mediplus'));

    var $controller;

    beforeEach(angular.mock.inject(function(_$controller_){
      $controller = _$controller_;

      
          
    }));
//add function 
  describe('validKey', function () {

        it('1 + 1 should equal 2', function () {
          var $scope = {};
          var controller = $controller('home', { $scope: $scope });
          var data={"is_valid":true,"success":true,"data":{"extendOn":"12","registrationKey":"dhananjay","duration":12,"plan":"12","registrationDate":"0000-00-00 00:00:00","marketingMember":"sonu"}};
          expect($scope.validKey()).toBe(data);
        }); 
    });
    //add function 
/*    describe('validKey', function () {
        it('1 + 1 should equal 2', function () {
            

            expect($scope.validKey()).toBe(10);
        }); 
    });*/

});
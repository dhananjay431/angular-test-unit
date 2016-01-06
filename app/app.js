angular.module('mediplus',
    [
    'ui.router'
    ])
    .service('userService',userService);
    function userService()
    {
        var user={};
        user.getuser={ShopName: "Sanket Medical Store",UserBranchDetails:{aadharNumber: "12456398745",city: "Pune",district: "Pune",emailId: "dbel431@gmail.com",firstName: "dhananjay",id: 1,isActive: false,lastName: "belhekar",menu: 4,middleName: "rajendra",mobileNumber: 1552010990,name: "dhananjay rajendra belhekar",panNumber: "AZZ1414AQ124",pinCode: 411027,role: "super_admin",selectBranchId: "1",state: "Maharashtra",streetAddress: "A-604, Waters Edge, DP Road, Near Shiv Sagar",userName: "sonu"}};
        return user;   
    }

    angular
        .module('mediplus')
        .controller('home', home);

    //home.$inject = ['$scope', '$state','userService','$stateParams'];
    home.$inject = ['$scope', '$state','$stateParams','userService'];

    function home($scope,$state,$stateParams,userService) {
        /*add by dhananjay*/
        
        $scope.validKey=validKey;
        

        
        function validKey()
        {  

            return {"is_valid":true,"success":true,"data":{"extendOn":"12","registrationKey":"dhananjay","duration":12,"plan":"12","registrationDate":"0000-00-00 00:00:00","marketingMember":"sonu"}};

      /*      apiUtility.executeApi('GET','registration/isValid')
            .then(function(response){
                
            },
            function(errorObject){
                $scope.errorMessage = errorObject.errorData.error.message;
            });*/

        }
    }
      
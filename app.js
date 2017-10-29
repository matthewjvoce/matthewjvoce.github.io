var app = angular.module("RFPApp", []);
var database = firebase.database();

// Database functions 
    
    function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture : imageUrl
        });
    }

app.controller("SlotController", ['$scope', function ($scope) {
    
    $scope.welcome = "Hello World!";
    
    var rfpArray = ["10till11", "11till12","12till1","1till2","2till3","3till4","4till5","5till6","6till7","7till8"]
    
    var Total_10till11 = 16
    var Total_11till12 = 15
    var Total_12till1 = 14
    var Total_1till2 = 13
    var Total_2till3 = 12
    var Total_3till4 = 11
    var Total_4till5 = 10
    var Total_5till6 = 9
    var Total_6till7 = 8
    var Total_7till8 = 7
      
    var preSet = 0
    
    var nextDay = 0
    
    $scope.setTotals = function() {
        
        preSet = $scope.Total_10till11;     
        $scope.RFP_10till11 = preSet;
        Total_10till11 = $scope.RFP_10till11;
        
        preSet = $scope.Total_11till12;     
        $scope.RFP_11till12 = preSet;
        Total_11till12 = $scope.RFP_11till12;
        
        preSet = $scope.Total_12till1;     
        $scope.RFP_12till1 = preSet;
        Total_12till1 = $scope.RFP_12till1;
        
        preSet = $scope.Total_1till2;     
        $scope.RFP_1till2 = preSet;
        Total_1till2 = $scope.RFP_1till2;
        
        preSet = $scope.Total_2till3;     
        $scope.RFP_2till3 = preSet;
        Total_2till3 = $scope.RFP_2till3;
        
        preSet = $scope.Total_3till4;     
        $scope.RFP_3till4 = preSet;
        Total_2till3 = $scope.RFP_3till4;
        
        preSet = $scope.Total_4till5;     
        $scope.RFP_4till5 = preSet;
        Total_2till3 = $scope.RFP_4till5;
        
        preSet = $scope.Total_5till6;     
        $scope.RFP_5till6 = preSet;
        Total_2till3 = $scope.RFP_5till6;
        
        preSet = $scope.Total_6till7;     
        $scope.RFP_6till7 = preSet;
        Total_2till3 = $scope.RFP_6till7;
        
        preSet = $scope.Total_7till8;     
        $scope.RFP_7till8 = preSet;
        Total_2till3 = $scope.RFP_7till8;
        
        

    }
    
    $scope.decreaseRFP = function(input) {
        
        if (input == 1 && $scope.RFP_10till11 > 0) {
            $scope.RFP_10till11--;
        }
        if (input == 2 && $scope.RFP_11till12 > 0) {
            $scope.RFP_11till12--;
        }
        if (input == 3 && $scope.RFP_12till1 > 0) {
            $scope.RFP_12till1--;
        }
        if (input == 4 && $scope.RFP_1till2 > 0) {
            $scope.RFP_1till2--;
        }
        if (input == 5 && $scope.RFP_2till3 > 0) {
            $scope.RFP_2till3--;
        }
        if (input == 6 && $scope.RFP_3till4 > 0) {
            $scope.RFP_3till4--;
        }
        if (input == 7 && $scope.RFP_4till5 > 0) {
            $scope.RFP_4till5--;
        }
        if (input == 8 && $scope.RFP_5till6 > 0) {
            $scope.RFP_5till6--;
        }
        if (input == 9 && $scope.RFP_6till7 > 0) {
            $scope.RFP_6till7--;
        }
        if (input == 10 && $scope.RFP_7till8 > 0) {
            $scope.RFP_7till8--;
        }
        if (input == "NXD") {
            $scope.RFP_Nxd++;
        }
        
    }
    
    $scope.addToNextDay = function() {
        
        
    }
    $scope.RFP_10till11 = Total_10till11;
    $scope.RFP_11till12 = Total_11till12;
    $scope.RFP_12till1 = Total_12till1;
    $scope.RFP_1till2 = Total_1till2;
    $scope.RFP_2till3 = Total_2till3;
    $scope.RFP_3till4 = Total_3till4;
    $scope.RFP_4till5 = Total_4till5;
    $scope.RFP_5till6 = Total_5till6;
    $scope.RFP_6till7 = Total_6till7;
    $scope.RFP_7till8 = Total_7till8;
    
    $scope.Total_10till11 = 20;
    $scope.Total_11till12 = 20;
    $scope.Total_12till1 = 20;
    $scope.Total_1till2 = 20;
    $scope.Total_2till3 = 20;
    $scope.Total_3till4 = 20;
    $scope.Total_4till5 = 20;
    $scope.Total_5till6 = 20;
    $scope.Total_6till7 = 20;
    $scope.Total_7till8 = 20;


    $scope.RFP_Nxd = nextDay;
    
    
}]);

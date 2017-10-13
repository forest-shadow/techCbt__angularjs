var app = angular.module( "app", [] );

// Ex.: sending string parameters to directive
app.controller( 'stringExample', [ '$scope', '$rootScope', function($scope, $rootScope) {
    $scope.a = 10;
    $scope.b = 20;
    
    $scope.p = 11;
    $scope.q = 22;
}]);

app.directive('message', function() {
    return {
        templateUrl: './templates/info-msg.html',
        scope: {
            a: '@',
            b: '@'
        }
    }
});

app.directive('message2', function() {
    return {
        templateUrl: './templates/info-msg.html',
        scope: {
            a: '@m',
            b: '@n'
        }
    }
});

// Ex.: sending object parameters to directive
app.controller('employeeController', ['$scope', function($scope) {
    $scope.emp = {
        empno: 1001,
        ename: 'Jag'
    };

    $scope.emp2 = {
        empno: 1002,
        ename: 'Vasya'
    };
}]);

app.directive('empInfo', function() {
    return {
        templateUrl: './templates/emp-info.html',
        scope: {
            employee: '='
        }
    }
});

app.directive('empInfo2', function() {
    return {
        templateUrl: './templates/emp-info.html',
        scope: {
            employee: '=oEmp'
        }
    }
});

// Ex.: sending function parameters to directive
app.controller('functionExampleController', [ '$scope', function($scope) {
    $scope.a = 10;
    $scope.b = 20;
    
    $scope.doSum = function(x, y) {
        var result = parseInt(x) + parseInt(y);
        alert(result);
    };
}]);

app.directive('showSum', function() {
    return {
        templateUrl: './templates/show-sum.html',
        scope: {
            p: '@',
            q: '@',
            sumFn: '&'
        }
    }
});
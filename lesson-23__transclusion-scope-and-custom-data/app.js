var app = angular.module("app", []);

app.controller('sampleController', ['$scope', function($scope) {
    $scope.a = {
        x: 10
    }
}]);

// shared scope
app.directive('message1', function() {
    return {
        templateUrl: './templates/message1.html',
        transclude: true,
        controller: function($scope, $element, $attrs) {
            $scope.b = {
                y: 20
            };
        }
    }
});

// inherited scope
app.directive('message2', function() {
    return {
        templateUrl: './templates/message1.html',
        transclude: true,
        scope: true,
        controller: function($scope, $element, $attrs) {
            $scope.b = {
                y: 20
            };
        }
    }
});

// isolated scope
app.directive('message3', function() {
    return {
        templateUrl: './templates/message1.html',
        transclude: true,
        scope: {},
        controller: function($scope, $element, $attrs) {
            $scope.b = {
                y: 20
            }
        }
    }
});

// custom data to transclusion scope
app.directive('message4', function() {
    return {
        templateUrl: './templates/message2.html',
        transclude: true,
        scope: {},
        controller: function($scope, $element, $attrs, $transclude) {
            $scope.b = {
                y: 20
            };

            $transclude(function(transEl, $transScope) {
                $transScope.b = {};
                $transScope.b.y = $scope.b.y;
                $element.find("#innerPanel").append(transEl);
            });
        }
    }
});

// custom transclusion scope
app.directive('message5', function() {
    return {
        templateUrl: './templates/message2.html',
        transclude: true,
        scope: {},
        controller: function($scope, $element, $attrs, $transclude) {
            $scope.b = {
                y: 20
            };

            var customScope = $scope.$new(true);
            customScope.a = {
                x: 100
            };
            customScope.b = {
                y: 200
            };

            $transclude(customScope, function(transEl) {
                $element.find('#innerPanel').append(transEl);
            })
        }
    }
});
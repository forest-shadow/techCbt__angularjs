var app = angular.module("app", []);

app.controller('sampleController', ['$scope', function($scope) {

}]);

// will provide multilink error
app.directive('message1', function() {
    return {
        templateUrl: './templates/message1.html',
        transclude: true,
        controller: function($scope, $element, $attrs, $transclude) {
            $element.find('#innerPanel1').append($transclude());
            $element.find('#innerPanel2').append($transclude());
        }
    }
});

app.directive('message2', function() {
    return {
        templateUrl: './templates/message1.html',
        transclude: true,
        controller: function($scope, $element, $attrs, $transclude) {
            $transclude(function(transEl) {
                $element.find('#innerPanel1').append(transEl);
            });

            $transclude(function(transEl) {
                $element.find('#innerPanel2').append(transEl);
            });
        }
    }
});
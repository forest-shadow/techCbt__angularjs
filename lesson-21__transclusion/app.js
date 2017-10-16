var app = angular.module("app", []);

app.controller('sampleController', ['$scope', function($scope) {

}]);

// ex. tranclude with ng-transclude
app.directive('message1', function() {
    return {
        templateUrl: './templates/message1.html',
        transclude: true
    }
});

// ex. transclude with directive's link function
app.directive('message2', function() {
    return {
        templateUrl: './templates/message2.html',
        transclude: true,
        link: function(scope, iElement,iAttrs, controller, transclude) {
            var content = transclude();

            iElement.find('#innerPanel2').append(content);
        }
    }
});

// ex. transclude with directive's controller function
app.directive('message3', function() {
    return {
        templateUrl: './templates/message3.html',
        transclude: true,
        controller: function($scope, $element, $attrs, $transclude) {
            var content = $transclude();
            
            $element.find('#innerPanel3').append(content);
        }
    };
});
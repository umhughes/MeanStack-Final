angular.module('languages').controller('LanguagesController', ['$scope', '$routeParams', '$location', 'Languages', '$timeout', function($scope, $routeParams, $location, Languages, $timeout){

    
    $scope.create = function() {

      var language = new Languages({
            productName: this.productName,
            Category: this.Category,
            Desc: this.Desc,
            Img: this.Img

      });
      language.$save(function(response) {
          $location.path('/api/languages/:' + response._id);
      }, function(errorResponse) {
          $scope.error = errorResponse.data.message;
      });
    };
    
    $scope.find = function() {
      $scope.languages = Languages.query();
      console.log($scope.languages);
    };
    
    $scope.findOne = function() {
        $scope.language = Languages.get({
            languageId: $routeParams.languageId
        });
    };
    
    $scope.update = function() {
        $scope.language.$update(function() {
            console.log($scope);
            $location.path('/api/languages/:' + $scope.language._id);
        }, function(errorResponse) {
            $scope.error = errorResponse.data.message;
        });
    };
    
    $scope.delete = function(language) {
        if (language) {
            language.$remove(function() {
                for (var i in $scope.languages) {
                    if ($scope.languages[i] === language) {
                        $scope.languages.splice(i, 1);
                    }
                }
            });
        } else {
            $scope.language.$remove(function() {
                $location.path('languages');
            });
        }
    };
    
    
}]);
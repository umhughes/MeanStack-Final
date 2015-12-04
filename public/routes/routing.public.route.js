angular.module('languages').config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/languages/create', {
        templateUrl: '/public/views/newLanguage.html',
    }).when('/', {
        templateUrl: '/public/views/display-languages.html'
    }).when('/languages/:languageId', {
        templateUrl: '/public/views/viewLanguage.html'
    }).when('/languages/:languageId/edit', {
        templateUrl: '/public/views/editLanguage.html'
    });
    
    // .when('/', {
    //     templateUrl: '/public/views/index.html'
    // });
    }
]);
angular.module('languages').factory('Languages', ['$resource', function($resource) {
    return $resource('/api/languages/:languageId', {
        languageId: '@_id'
    }, {
        update: {
            method: 'PUT'
        },
    });
}]);

angular.module('syslogjs',[])

.controller("Main", function ($rootScope) {
    $rootScope.stat= [
        'card-default',
        'card-info',
        'card-success',
        'card-danger',
        'card-warning',
        'edge-danger card-danger' ];

});
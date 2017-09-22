
angular.module('syslogjs',['ui.toggle', 'faye'])
.factory('FayeFactory', function ($faye) {
    return $faye("http://localhost:8000/");
})
.controller("Main", function ($rootScope, $interval,FayeFactory) {
    $rootScope.logClients = [];
    $rootScope.stat= [
        'card-default',
        'card-info',
        'card-success',
        'card-danger',
        'card-warning',
        'edge-danger card-danger' ];

    $rootScope.logs= [
        '18-06-2016 09:20:25.9 [INFO] App started and listening on port 3000!',
        '18-06-2016 09:20:28.9 [DEBUG] root accessed',
        '18-06-2016 09:21:17.2 [INFO] App started and listening on port 3000!',
        '18-06-2016 09:21:17.2 [INFO] App started and listening on port 3000!',
        '18-06-2016 09:21:23.9 [DEBUG] show players',
        '18-06-2016 09:21:23.9 [DEBUG] show players'
    ];

    $rootScope.logLines = [0,0,1,1,0,3,0,5,2,0,0,4,1,0,0,1,1,0,3,0,5,2,0,0,0,3,5,0,0,0,1,1,0,3,0,5];
    
    FayeFactory.subscribe('/logClient', function(client) {
        var exist = false;
        $rootScope.logClients.forEach(function(c,idx) {
            if(c.label== client.label) {
                exist= true;
                $rootScope.logClients[idx]= client;
            } 
            
        }, this);
        if(!exist)
            $rootScope.logClients.push(client);        
    })

    var i=0;
    $interval( function () {
        $rootScope.logLines.push(  $rootScope.logLines[i++]);
    },1000);


});
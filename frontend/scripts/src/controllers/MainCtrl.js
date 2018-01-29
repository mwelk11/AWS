app.controller('MainCtrl', function($scope, $location, nameService) {

    'use strict';

    $scope.getNames = function() {
        nameService.getNames()
            .then(function(data) {
                $scope.names = data;
            }, function(error) {
                console.log('ERROR in getNames(): ', error);
            });
    };

});

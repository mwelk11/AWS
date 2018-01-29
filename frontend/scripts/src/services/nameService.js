app.service('nameService', function($http, $q) {

    'use strict';

    this.getNames = function() {
        return $http.get('http://localhost:8080/names')
            .then(function(response) {
            if(response.status == 200) {
                return response.data;
            } else {
                console.log(">>>>> Invalid response from service");
                return $q.reject(response.data);
            }
        }, function(response) {
            return $q.reject(response.data);
        });
    };

});

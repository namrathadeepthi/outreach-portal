var service = angular.module('outreachApp.factories', []);
service.factory('dataFactory', function($http){
    var data = {};
    data.fetch = function(url){
        return $http.get(url);
    }
    data.fetchbyid = function(id){
        return $http.put('/users/2', id);
    }
    data.post = function(url, data){
        return $http.post(url, data);
    }
    
    
    return data;
});

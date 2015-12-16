'use strict';

/**
 * @ngdoc function
 * @name myRepoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myRepoApp
 */
angular.module('myRepoApp')
  .controller('MainCtrl', function ($http, dataUrl) {
    var vm = this;
    $http.get(dataUrl)
        .success(function(data){
            console.info('Get Users', data);
            vm.users = data;
        })
        .error(function(error){
            vm.users.error = error;
            console.error('Get users Error', error);
        });
  });

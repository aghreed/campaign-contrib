(function () {
  'use strict';

  var app = angular.module('campaign-contrib');

    // candidates
    app.controller('CandidatesController', ['$scope', '$http', '$log', function ($scope, $http, $log) {
      $log.info('Candidate Controller Reached');

      $http({method: 'GET', url: 'data/test.json'})
        .success(function(data) {
          $scope.testItems = data.test;
          $log.info($scope.test);
        }).error(function (error) {
          $log.error(error);
        });

        
    }]);

    // contributors
    app.controller('ContributorsController', ['$scope', '$log', function ($scope, $log) {
      $log.info('Contributor Controller Reached');
    }]);

    // vendors
    app.controller('VendorsController', ['$scope', '$log', function ($scope, $log) {
      $log.info('Vendor Controller Reached');
    }]);

})();

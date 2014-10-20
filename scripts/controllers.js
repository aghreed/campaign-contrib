(function () {
  'use strict';

  var app = angular.module('campaign-contrib');

    // home
    app.controller('HomeController', ['$scope', '$http', '$log', 'ngTableParams', function ($scope, $http, $log, ngTableParams) {
      $log.info('Home Controller Reached');

      // $scope.candidates = [];

        $scope.tableParams = new ngTableParams({
          page: 1,
          count: 15
        }, {
          total: 0,
          getData: function ($defer, params) {

            $http({method: 'GET', url: 'https://contributions.opennebraska.io/candidates/all'})
              .success(function (data) {
                params.total(data.length);


                $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
              })
              .error(function (error) {
                $log.error(error);
              });

            // $defer.resolve($scope.candidates.slice((params.page() - 1) * params.count(), params.page() * params.count()));
          }
        });

    }]);

    // candidates
    app.controller('CandidateDetailController', ['$scope', '$http', '$log', function ($scope, $http, $log) {
      $log.info('Candidate Controller Reached');

      $http({method: 'GET', url: 'https://contributions.opennebraska.io/candidates/' + $scope.$stateParams.id})
        .success(function(data) {
          $scope.details = data;

          $scope.totalContributionAmount = 0;
          angular.forEach($scope.details.contributions_received, function (contribution) {
            $scope.totalContributionAmount += contribution.cash;
          });

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

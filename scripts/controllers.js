(function () {
  'use strict';

  var app = angular.module('campaign-contrib');

    // candidates
    app.controller('CandidatesController', ['$scope', '$log', function ($scope, $log) {
      $log.info('Candidate Controller Reached');
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

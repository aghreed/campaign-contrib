(function () {
  'use strict';

    var app = angular.module('campaign-contrib', [
      'ui.router',
      'ngTable'
    ]);

    app.run(['$rootScope', '$state', '$stateParams', '$log', function( $rootScope, $state, $stateParams, $log) {

      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;

      $log.info('app up and running...');

    }]);

})();

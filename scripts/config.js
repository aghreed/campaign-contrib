(function () {
  'use strict';

    var app = angular.module('campaign-contrib');

    app.config(['$urlRouterProvider', '$logProvider', config]);

    function config($urlRouterProvider, $logProvider) {

        if ($logProvider.debugEnabled) {
          $logProvider.debugEnabled(true);
        }

        $urlRouterProvider.otherwise('/home');
    }

})();

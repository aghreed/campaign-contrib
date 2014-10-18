(function () {
  'use strict';

    var app = angular.module('campaign-contrib');

    app.config(['$stateProvider', routes]);

    function routes ($stateProvider) {

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'templates/home.html'
        })
        .state('candidates', {
          url: '/cadidates',
          templateUrl: 'templates/candidates.html',
          controller: 'CandidatesController'
        })
        .state('contributors', {
          url: '/contributors',
          templateUrl: 'templates/contributors.html',
          controller: 'ContributorsController'
        })
        .state('vendors', {
          url: '/vendors',
          templateUrl: 'templates/vendors.html',
          controller: 'VendorsController'
        });
    }
})();

(function () {
  'use strict';

    var app = angular.module('campaign-contrib');

    app.config(['$stateProvider', routes]);

    function routes ($stateProvider) {

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'templates/home.html',
          controller: 'HomeController'
        })
        .state('candidates', {
          url: '/candidates',
          templateUrl: 'templates/candidates.html',
          controller: 'CandidatesController'
        })
        .state('candidate-detail', {
          url: '/candidates/:id',
          templateUrl: 'templates/candidate.html',
          controller: 'CandidateDetailController'
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

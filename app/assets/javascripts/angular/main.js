'use strict'

angular.module('frumpusKrumpus', [
  'ui.router.compat',
  'templates'
]).config(configFrumpKrump);

configFrumpKrump.$inject = ['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', '$locationProvider'];

function configFrumpKrump($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
  $urlMatcherFactoryProvider.caseInsensitive(true);
  $urlMatcherFactoryProvider.strictMode(false);

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeCtrl',
      templateUrl:"home/_index.html"
    })
    .state('comic', {
      url: '/comics/:id',
      controller: 'HomeCtrl',
      templateUrl:"home/_index.html"
    });
}

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
      controller: 'ContentCtrl',
      templateUrl:"home/_index.html"
    })
    .state('comics', {
      url: '/comics',
      controller: 'HomeCtrl',
      templateUrl:"home/_index.html"
    })
    .state('archive', {
      url: '/archive',
      controller: 'ArchiveCtrl',
      templateUrl:"archive/_archive.html"
    })
    .state('about', {
      url: '/about',
      controller: 'AboutCtrl',
      templateUrl:"about/_about.html"
    });
}

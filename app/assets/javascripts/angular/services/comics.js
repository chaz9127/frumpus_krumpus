angular.module('frumpusKrumpus')
  .factory('ComicAPI', ComicAPI);

ComicAPI.$inject = ['$http'];

function ComicAPI($http) {
  var service = {
    index: index
  }

  function index() {
    return $http.get('/api/web/comics');
  }
  return service;
}

angular.module('frumpusKrumpus')
  .factory('ComicAPI', ComicAPI);

ComicAPI.$inject = ['$http'];

function ComicAPI($http) {
  var service = {
    index: index,
    show: show
  }

  function index() {
    return $http.get('/api/web/comics');
  }

  function show(data) {
    return $http.get('/api/web/comics/'+data.id);
  }
  return service;
}

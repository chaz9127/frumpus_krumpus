angular.module('frumpusKrumpus')
    .directive('comics', comics)

comics.$inject = ['ComicAPI', '$stateParams'];

function comics(ComicAPI, $stateParams) {
  return {
    restrict: 'E',
    scope: {
    },
    templateUrl: 'home/_comics.html',
    link: link
  };

  function link(scope, elem, attrs){
    ComicAPI.index().then(function(resp) {
      var comics = resp.data.comics
      scope.latestComic = comics[comics.length - 1]
    })
  }
}

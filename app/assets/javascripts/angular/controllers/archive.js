angular.module('frumpusKrumpus')
  .controller('ArchiveCtrl', ArchiveCtrl);

ArchiveCtrl.$inject = ['$scope', '$state', 'ComicAPI'];

function ArchiveCtrl($scope, $state, ComicAPI) {
  ComicAPI.index().then(function(resp) {
    $scope.comics = resp.data.comics;
  });

  $scope.state = $state.current.name;
}

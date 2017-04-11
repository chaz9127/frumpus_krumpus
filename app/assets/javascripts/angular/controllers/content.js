angular.module('frumpusKrumpus')
  .controller('ContentCtrl', ContentCtrl);

ContentCtrl.$inject = ['$scope', '$state'];

function ContentCtrl($scope, $state) {
  $scope.state = $state.current.name;
}

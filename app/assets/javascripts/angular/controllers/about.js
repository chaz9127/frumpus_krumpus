angular.module('frumpusKrumpus')
  .controller('AboutCtrl', AboutCtrl);

AboutCtrl.$inject = ['$scope', '$state'];

function AboutCtrl($scope, $state) {
  $scope.state = $state.current.name;
}

angular.module('frumpusKrumpus')
    .directive('content', content)

content.$inject = ['ComicAPI', '$state'];

function content(ComicAPI, $state) {
  return {
    restrict: 'E',
    scope: {
      type: "="
    },
    templateUrl: 'home/_content.html',
    link: link
  };

  function link(scope, elem, attrs){
    scope.currentComic = {};
    scope.content = [];
    if(scope.type === 'comic') {
      if($state.params.id) {
        ComicAPI.show({id: $state.params.id}).then(function(resp) {
          scope.currentContent = resp.data.comic
          ComicAPI.index().then(function(resp) {
            applyContent(resp.data.comics, false)
          });
        });
      } else {
        ComicAPI.index().then(function(resp) {
          applyContent(resp.data.comics, true);
        });
      }
    }

    scope.firstContent = function() {
      $state.go(scope.type, {id: 1} )
    }

    scope.latestContent = function() {
      $state.go(scope.type, {id: scope.mostRecent.comic_number} )
    }

    scope.previousContent = function() {
      var content_id;
      if(scope.currentContent.comic_number - 1 > 0) {
        content_id = scope.currentContent.comic_number - 1;
      } else {
        content_id = scope.mostRecent.comic_number
      }
      $state.go(scope.type, {id: content_id} )
    }

    scope.nextContent = function() {
      var content_id;
      if(scope.currentContent.comic_number + 1 > scope.mostRecent.comic_number) {
        content_id = 1;
      } else {
        content_id = scope.currentContent.comic_number + 1
      }
      $state.go(scope.type, {id: content_id} )
    }

    scope.randomContent = function() {
      var randomContentId = randomInt(1,scope.mostRecent.comic_number)
      $state.go(scope.type, {id: randomContentId} );
    }

    ///

    function applyContent(data, applyCurrent) {
      scope.content = data;
      if (applyCurrent)
        scope.currentContent = scope.content[scope.content.length - 1];
      scope.mostRecent = scope.content[scope.content.length - 1]
    }

    function randomInt(min,range) {
      return Math.floor((Math.random()*(range))+min)
    }

  }
}

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
          scope.currentContent = resp.data.comic;
          ComicAPI.index().then(function(resp) {
            applyContent(resp.data.comics, false);
          });
        });
      } else {
        ComicAPI.index().then(function(resp) {
          applyContent(resp.data.comics, true);
        });
      }
    }

    scope.firstContent = function() {
      $state.go( scope.type, {id: scope.content[0].slug} )
    }

    scope.latestContent = function() {
      $state.go( scope.type, {id: scope.mostRecent.slug} )
    }

    scope.previousContent = function() {
      var content_id;
      if(scope.currentContent.issue_number - 1 > 0) {
        content_id = scope.content[scope.currentContent.issue_number - 2].slug;
      } else {
        content_id = scope.mostRecent.slug;
      }
      $state.go( scope.type, {id: content_id} )
    }

    scope.nextContent = function() {
      var content_id;
      if(scope.currentContent.issue_number + 1 > scope.mostRecent.issue_number) {
        content_id = scope.content[0].slug;
      } else {
        content_id = scope.content[scope.currentContent.issue_number].slug;
      }
      $state.go(scope.type, {id: content_id} )
    }

    scope.randomContent = function() {
      var randomId = randomInt(1,scope.mostRecent.issue_number)
      var randomContentSlug = scope.content[randomId - 1].slug
      $state.go(scope.type, {id: randomContentSlug} );
    }

    ///

    function applyContent(data, applyCurrent) {
      scope.content = data;
      if (applyCurrent) scope.currentContent = scope.content[scope.content.length - 1];
      scope.mostRecent = scope.content[scope.content.length - 1]
    }

    function randomInt(min,range) {
      var random = Math.floor((Math.random()*(range))+min)
      if (random === scope.currentContent.issue_number) {
        return randomInt(min,range);
      } else {
        return random;
      }
    }

  }
}

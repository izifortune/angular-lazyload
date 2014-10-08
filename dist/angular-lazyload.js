'use strict';

angular.module('ng-lazyload', []);

angular.module('ng-lazyload')
.directive('lazyload', function() {
  return {
    restrict: 'AE',
    scope: {
      image: '=',
      effect: '=',
      load: '&'
    },
    link: function postLink(scope, element, attrs) {
      scope.$watch('image', function() {
        if (scope.image) {
          $(element).addClass('lazy');
          $(element).show();
          $(element).attr('data-original', scope.image);
          $(element).lazyload({
            effect: scope.effect,
            load: scope.load
          });
        }
      });
    }
  };
});

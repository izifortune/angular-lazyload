describe('Testing lazyload directive', function() {
  // load the directive's module
  beforeEach(module('ng-lazyload'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  // it('', inject(function ($compile) {
  //   element = angular.element('<accordion></accordion>');
  //   element = $compile(element)(scope);
  //   expect(element.text()).toBe('this is the accordion directive');
  // }));
});
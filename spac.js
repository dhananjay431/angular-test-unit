describe('Filters', function() {
  beforeEach(module('myApp'));

  describe('reverse', function() {
	  var reverse;
    beforeEach(inject(function($filter) {
      reverse=$filter('reverse',{});
    }));

    it('should replace VERSION', function() {
      expect(reverse('dhananjay')).toBe('dhananjay');
    });
  });
});

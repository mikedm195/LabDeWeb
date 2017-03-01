suite('No Cookie Page Tests', function(){
	test('page should not contain any cookies', function(){
		assert(!document.cookie);
	});
});

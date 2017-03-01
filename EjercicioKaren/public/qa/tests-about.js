suite('"Discography" Page Tests', function(){
	test('page should contain link to Discography page', function(){
		assert($('a[href="/Discography"]').length);
	});
});

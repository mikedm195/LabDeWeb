suite('Global Tests', function(){
	test('page has a valid title', function(){
		assert(document.title && document.title.match(/\S/) &&
			document.title.toUpperCase() !== 'TODO');
	});
});

suite('Global Tests', function(){
	test('page is running at localhost', function(){
		assert(document.URL.includes('localhost'));
	});
});

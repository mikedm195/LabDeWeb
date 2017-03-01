suite('"Welcome" Page Tests', function(){
	test('Contiene un link a la pagina de Wikipedia', function(){
		assert($('a[href="https://es.wikipedia.org/wiki/The_Beatles"]').length);
	});
});

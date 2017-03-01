suite('Name Global Tests', function(){
	test('La pagina tiene un titulo valido', function(){
		assert(document.title && document.title.match(/\S/) &&
			document.title.toUpperCase() !== 'TODO');
	});
});

suite('Port Global Tests', function(){
	test('La pagina esta corriendo el el puerto 3000', function(){
		assert(document.URL.includes(':3000'));
	});
});

var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({ defaultLayout: 'main', });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.use(function (req, res, next) {
	res.locals.partials =
		{
			alumnos: [
				{
					nombre: 'Mike',
					materias: [
						{
							nombre: 'Mate',
							calificacion: 90,
						},
						{
							nombre: 'Español',
							calificacion: 100,
						}
					]
				},
				{
					nombre: 'Rodrigo',
					materias: [
						{
							nombre: 'Mate',
							calificacion: 69,
						},
						{
							nombre: 'Esáñol',
							calificacion: 70,
						}
					]
				},
			]
		};
	next();
});

app.use(function (req, res, next) {
	var promMate = 0;
	var promEsp = 0;
	for(var i = 0;i<res.locals.partials.alumnos.length;i++){
		promMate += res.locals.partials.alumnos[i].materias[0].calificacion;
		promEsp += res.locals.partials.alumnos[i].materias[1].calificacion;
	}
	res.locals.promMate = promMate/2;
	res.locals.promEsp = promEsp/2;	
	next();
});
var alumnoActual = {
	alumnoActual: {
		nombre: 'Miguel del Moral',
		imagen: 'http://cdn01.ib.infobae.com/adjuntos/162/imagenes/014/014/0014014674.jpg',
		materia: 'Mate',
		calificacion: 100,
	}
}
app.get('/', function (req, res) {
	res.render('home',
		alumnoActual
	);
});

app.get('/about', function (req, res) {
	res.render('about', alumnoActual);
});

app.use(function (req, res, next) {
	res.status(404);
	res.render('404');
});

app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function () {
	console.log('Express started on http://localhost:' +
		app.get('port') + '; press Ctrl-C to terminate.');
});

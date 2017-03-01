var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({ defaultLayout:'main', });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next){
		res.locals.partials = 
		{locations: [
			{
				name: 'Portland',
				forecastUrl: 'http://www.wunderground.com/US/OR/Portland.html',
				iconUrl: 'http://icons-ak.wxug.com/i/c/k/cloudy.gif',
				weather: 'Overcast',
				temp: '54.1 F (12.3 C)',
			},
			{
				name: 'Bend',
				forecastUrl: 'http://www.wunderground.com/US/OR/Bend.html',
				iconUrl: 'http://icons-ak.wxug.com/i/c/k/partlycloudy.gif',
				weather: 'Partly Cloudy',
				temp: '55.0 F (12.8 C)',
			},
			{
				name: 'Manzanita',
				forecastUrl: 'http://www.wunderground.com/US/OR/Manzanita.html',
				iconUrl: 'http://icons-ak.wxug.com/i/c/k/rain.gif',
				weather: 'Light Rain',
				temp: '55.0 F (12.8 C)',
			},
		]};
	next();
});

app.get('/',function(req,res){
	res.render('home');
});

app.get('/ejercicio1',function(req,res){
	res.render('ejercicio1',{
			currency: {
				name: 'United States dollars',
				abbrev: 'USD',
			},
			tours: [
				{ name: 'Hood River', price: '$99.95' },
				{ name: 'Oregon Coast', price: '$159.95' } 
			],
			specialsUrl: '/url',
			currencies: [ 'USD', 'GBP', 'BTC' ]
		}
	);
});

app.get('/ejercicio1SL',function(req,res){
	res.render('ejercicio1',{
			currency: {
				name: 'United States dollars',
				abbrev: 'USD',
			},
			tours: [
				{ name: 'Hood River', price: '$99.95' },
				{ name: 'Oregon Coast', price: '$159.95' } 
			],
			specialsUrl: '/url',
			currencies: [ 'USD', 'GBP', 'BTC' ],
			layout:null
		}
	);
});

app.get('/ejercicio1MS',function(req,res){
	res.render('ejercicio1',{
			currency: {
				name: 'United States dollars',
				abbrev: 'USD',
			},
			tours: [
				{ name: 'Hood River', price: '$99.95' },
				{ name: 'Oregon Coast', price: '$159.95' } 
			],
			specialsUrl: '/url',
			currencies: [ 'USD', 'GBP', 'BTC' ],
			layout:'microsite'
		}
	);
});

app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log( 'Express started on http://localhost:' +
	app.get('port') + '; press Ctrl-C to terminate.' );
});

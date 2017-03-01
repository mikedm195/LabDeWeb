var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({
       defaultLayout:'main',
       helpers: {
           section: function(name, options){
               if(!this._sections) this._sections = {};
               this._sections[name] = options.fn(this);
               return null;
} }
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.use(require('body-parser')());

app.get('/newsletter', function(req, res){
	res.render('newsletter', { csrf: 'CSRF token goes here' });
});

app.get('/newsletter-ajax', function(req, res){
	res.render('newsletter-ajax', { csrf: 'CSRF token goes here' });
});

app.post('/process', function(req, res){
	console.log('Form (from querystring): ' + req.query.form);
	console.log('CSRF token (from hidden form field): ' + req.body._csrf);
	console.log('Name (from visible form field): ' + req.body.name);
	console.log('Email (from visible form field): ' + req.body.email);
	res.redirect(303, '/thank-you');
});

app.post('/process2', function(req, res){
		res.send({ success: true });
});

app.get('/thank-you', function(req, res){
	res.render('thank-you');
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
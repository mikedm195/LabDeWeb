const express = require('express');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
var credentials = require("./credentials.js");
var sessionStore = new MySQLStore(credentials.option);

var app = express();

var handlebars = require('express-handlebars').create({
    defaultLayout:'main'
});

app.use(session({
    key: 'key',
    secret: 'secret',
    store: sessionStore,
    resave: true,
    saveUninitialized: false,
    cookie: {
        expires: false,
        maxAge: null
    }
}))

db.connect(function(err){
    if(err){
        console.log('unable to connect');
        exit(1);
    }
})


app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.use(require('cookie-parser')(credentials.cookieSecret));

app.use(require('body-parser')());

app.get('/', function(req, res){    
    req.session.name="YO";
	res.render('home');
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

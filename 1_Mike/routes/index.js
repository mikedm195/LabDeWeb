var express = require('express');
var router = express.Router();

const tours = "No hay tours programados ya que la banda de los beatles ya no existe puesto que ya la mayoria estan muertos y los que no ya estan grandes aunque esto no evita que sean una de las mas grandes bandas de toda la historia"

router.get('/', function(req, res) {
	res.render('welcome', {
        pageTestScript: '/qa/tests-about.js'
    });
});

router.get('/Discography', function(req, res) {
	res.render('discography', {
        pageTestScript: '/qa/tests-img.js'
    });
});

router.get('/Tour_dates', function(req, res) {
	res.render('tours', { tours: tours, pageTestScript: '/qa/no-sense-test.js' });
});


module.exports = router;

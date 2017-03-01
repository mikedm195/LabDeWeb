var express = require('express');
var router = express.Router();

const discografia = [
        {
            cancion: "cancion1",
            fecha: "Septiembre 2010"
        },
        {
            cancion: "cancion2",
            fecha: "Enero 2014"
        },
        {
            cancion: "cancion3",
            fecha: "Febrero 2017"
        },
    ];

const tours = [
        {
            lugar: "CDMX",
            fecha: "HOY"
        },
        {
            lugar: "ITESM CSF",
            fecha: "10 de febrero del 2017"
        },
        {
            lugar: "China",
            fecha: "12 de febrero del 2017"
        },
        {
            lugar: "Egipto",
            fecha: "20 de febrero del 2017"
        },
    ];

router.get('/', function(req, res) {
	res.render('home', {
        pageTestScript: '/qa/tests-img.js'
    });
});

router.get('/Discography', function(req, res) {
	res.render('discography', {
        discografia: discografia, pageTestScript: '/qa/tests-about.js'
    });
});

router.get('/Tour_dates', function(req, res) {
	res.render('tours', { tours: tours, pageTestScript: '/qa/no-cookie-test.js' });
});


module.exports = router;

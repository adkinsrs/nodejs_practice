// Running example from the book
// Fictional website for a company that offers services for those traveling to Oregon

var express = require('express');

var app = express();

// Set up the Handlebars view engine
// Personal note - defaultLayout points to views/layouts/main.handlebars
var handlebars = require('express3-handlebars').create({ defaultLayout : 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || '3000');

// Use static files and views (CSS, client-side JS, images, etc.)
app.use(express.static(__dirname + '/public'));

// Personal note - Order of pages in script is important.  Uppermost route is handled first.  So if the '404' page was at the top then that would be loaded instead of the home page.

app.get('/', function(req, res) {
    // Personal note - "home.handlebars" is located in the 'views' directory
    res.render('home');
});

app.get('/about', function(req, res) {
    res.render('about');
});

//custom 404 page
app.use(function(req, res) {
    res.status(404);
    res.render('404');
});

//custom 500 page
app.use(function(req, res) {
    console.error(err.stack)
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + app.get('port') + ' - press Ctrl+C to terminate.');
});

// Running example from the book
// Fictional website for a company that offers services for those traveling to Oregon

var express = require('express');

var app = express();

app.set('port', process.env.PORT || '3000');

// Personal note - Order of pages in script is important.  Uppermost route is handled first.  So if the '404' page was at the top then that would be loaded instead of the home page.

app.get('/', function(req, res) {
    res.type('text/plain');
    res.send('Meadowlark Travel');
});

app.get('/about', function(req, res) {
    res.type('text/plain');
    res.send('About Meadowlark Travel');
});

//custom 404 page
app.use(function(req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

//custom 500 page
app.use(function(req, res) {
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + app.get('port') + ' - press Ctrl+C to terminate.');
});
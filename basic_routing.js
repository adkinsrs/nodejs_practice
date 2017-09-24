var http = require('http');

http.createServer( function(req, res) {
    // Normalize URL by a) rm querystring, b) rm optional end-slash, and c) make lowercase
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    
    switch(path) {
        case '':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Homepage');
            break;
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('About');
            break;
        default:
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
            break;
    }

} ).listen(3000);

console.log("Server started on localhost:3000 - press Ctrl-C to terminate.");
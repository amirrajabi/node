const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to home.');
        res.end();
    }
    if (req.url === '/amir') {
        res.write('Welcome to Amir page.');
        res.end();
    }
}).listen(3030);
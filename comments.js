// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file
// Create a route that serves the comments.json file when the URL path is /api/comments
// Use the fs module to read the comments.json file and send the contents back to the client

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/api/comments') {
        fs.readFile(path.join(__dirname, 'comments.json'), 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(data);
            }
        });
    } else {
        fs.readFile(path.join(__dirname, 'comments.html'), 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
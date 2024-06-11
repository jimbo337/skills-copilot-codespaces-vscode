// Create Web Server
// Run the server
// Test the server

const express = require('express');

const app = express();

// app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/comments', (req, res) => {
    res.send('Comments');
});

app.listen(3000, () => {
    console.log('Server is running');
});
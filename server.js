const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url, request.method);

    //? set Header content type

    response.setHeader('Content-Type', 'text/html');

    response.write('<p>hello, ninjas</p>');
    response.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
})
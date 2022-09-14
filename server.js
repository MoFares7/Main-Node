const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    console.log(request.url, request.method);

    //? set Header content type

    response.setHeader('Content-Type', 'text/html');

    let path = './view/';
    switch (request.url) {
        case '/':
            path += 'index.html';
            response.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            response.statusCode = 200;
            break;
        default:
            path += 'not_found.html';
            response.statusCode = 404;
            break;
    }

    //? send Data on Html
    fs.readFile(path, (error, data) => {
        if (error) {
            console.log(error);
            response.end();
        } else {
            // response.write(data);

            response.end(data);
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
})
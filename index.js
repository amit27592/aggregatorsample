const handler = require('serve-handler');
const http = require('http');

const server = http.createServer((request, response) => {
    // You pass two more arguments for config and middleware
    // More details here: https://github.com/zeit/serve-handler#options
    return handler(request, response);
})

const server1 = http.createServer((request, response) => {
    // You pass two more arguments for config and middleware
    // More details here: https://github.com/zeit/serve-handler#options
    return handler(request, response);
})

server.listen(5000, () => {
    console.log('Running at http://localhost:5000');
});

server1.listen(5001, () => {
    console.log('Running at http://localhost:5001');
});

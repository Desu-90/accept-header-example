const http = require('http');
const url = require('url');
const handler = require('./responses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const routes = {
    '/': handler.getIndex,
    '/cats': handler.getCats,
    index: handler.getIndex
};

const onRequest = (request, response) => {
    console.log(request.url);

    const theProperRoute = routes[request.url] || routes.index;

    theProperRoute(request, response);

};

http.createServer(onRequest).listen(port, () => {
    console.log(`Listening on 127.0.0.1: ${port}`);
});

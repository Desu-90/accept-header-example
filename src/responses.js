const fs = require('fs');  // pull in the file system module

const index = fs.readFileSync(`${__dirname}/../client/client.html`);

const respond = (request, response, content, type) => {
  response.writeHead(200, { 'Content-Type': type });
  response.write(content);
  response.end();
};

const getIndex = (request, response) => {
  console.log('getIndex called');
  respond(request, response, index, 'text/html');
};

const getCats = (request, response) => {
  console.log('getCats called');
  respond(request, response, 'dummy', 'text/html');
}

module.exports = {
  getCats,
  getIndex,
};

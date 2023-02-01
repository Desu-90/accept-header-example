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

  const theCat = {
    name: 'Nibbles',
    age: 4,
  };

  const prefAccept = request.headers.accept.split(',')[0];

  if (prefAccept === 'application/json') {
    const dataString = JSON.stringify(theCat);
    console.log("cat get json");
    respond(request, response, dataString, 'application/json');
  }
  if (prefAccept === 'text/xml') {
    const dataString = `
      <response>
        <name>${theCat.name}</name>
        <age>${theCat.age}</age>
      </response>
    `.trim();
    console.log("cat get xml");

    respond(request, response, dataString, 'text/xml');
  };
}

module.exports = {
  getCats,
  getIndex,
};

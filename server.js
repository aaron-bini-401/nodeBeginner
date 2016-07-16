const http = require('http'),
  url = require('url');

function start(route, handle) {
  function onRequest(req, res) {
    const pathName = url.parse(req.url).pathname;
    console.log(`Request for ${pathName} received.`);
    route(handle, pathName, res, req);

  };

  http.createServer(onRequest).listen(8888);
  console.log('Server has started.');
};

exports.start = start;

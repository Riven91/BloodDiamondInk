const { onRequest } = require('firebase-functions/v2/https');
  const server = import('firebase-frameworks');
  exports.ssrblooddiamondink79184 = onRequest({"id":"my-web-app","region":"europe-west4"}, (req, res) => server.then(it => it.handle(req, res)));
  
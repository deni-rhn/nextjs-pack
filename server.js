const express = require('express');
const next = require('next');
const compression = require('compression');

const dev = process.env.NODE_ENV !== 'production';
const port = dev ? 3000 : 1337;
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(compression());
  server.get('*', (req, res) => handle(req, res));

  if (process.env.NODE_ENV === 'production') {
    server.get(/^\/_next\/static\/(images|fonts)\//, (_, res, nextHandler) => {
      res.setHeader('Cache-Control', 'public, max-age=31557600, immutable');
      nextHandler();
    });
  }

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

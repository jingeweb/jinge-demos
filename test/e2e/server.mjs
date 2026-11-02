import { readFile, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';

import { site } from './demos.mjs';
const types = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.woff2': 'font/woff2',
};
createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (pathname === '/favicon.ico') {
      res.writeHead(204);
      res.end();
      return;
    }
    if (pathname === '/') {
      res.writeHead(200);
      res.end('Jinge demo e2e server');
      return;
    }
    if (!pathname.startsWith('/jinge-demos/')) {
      res.writeHead(404);
      res.end();
      return;
    }
    let file = path.resolve(site, pathname.slice('/jinge-demos/'.length));
    if (!file.startsWith(`${site}${path.sep}`)) {
      res.writeHead(403);
      res.end();
      return;
    }
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
    const body = await readFile(file);
    res.writeHead(200, {
      'Content-Type': types[path.extname(file)] ?? 'application/octet-stream',
      'Cache-Control': 'no-store',
    });
    res.end(body);
  } catch {
    res.writeHead(404);
    res.end();
  }
}).listen(Number(process.env.DEMOS_TEST_PORT ?? 5199), '127.0.0.1');

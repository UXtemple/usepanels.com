import createServer from 'panels/server';
import fs from 'fs';
import https from 'https';
import pkg from './package.json';

const server = createServer({
  apps: ['node_modules/usepanels.com']
});

const options = {
  key: fs.readFileSync(process.env.KEY),
  cert: fs.readFileSync(process.env.CRT)
};

https.createServer(options, server.callback()).listen(443);

console.log(`${pkg.name} panels server is ready at https://0.0.0.0`);

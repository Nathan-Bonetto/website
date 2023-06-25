require('dotenv').config();

const Hapi = require('@hapi/hapi');

async function init() {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST
  });

  await server.start();
  console.log(`⚡️[server]: Server is running on ${ server.info.uri }`);
}

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();

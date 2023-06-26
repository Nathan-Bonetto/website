require('dotenv').config();

const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const routes = require('./src/api/routes/index');

async function init() {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST
  });

  server.route(routes);

  await mongoose.connect(process.env.MONGO_URI);
  await server.start();
  console.log(`⚡️[server]: Server is running on ${ server.info.uri }`);
}

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();

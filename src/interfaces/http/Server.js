const fastify = require("fastify");
const cors = require("fastify-cors");
const compress = require("fastify-compress");
const mongoose = require('mongoose')
const { service } = require("../../../config"); 

class Server {
  constructor({ config, router, containerPlugin }) {
    this.config = config;
    this.fastify = fastify({
      logger: true
    });

    mongoose.connect(service.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then(() => console.log('MongoDB connected…'))
    .catch(err => console.log(err))

    this.fastify
      .register(cors, { 
        origin: '*',
        allowedHeaders: ['Origin', 'X-Requested-With', 'Accept', 'Content-Type', 'Authorization'],
        methods: ['GET', 'PUT', 'POST', 'OPTIONS', 'DELETE']
      })
    this.fastify.register(compress);
    this.fastify.register(containerPlugin);
    this.fastify.register(router);
  }

  start() {
    return new Promise((resolve, reject) => {
      this.fastify.listen(this.config.web.port, err => {
        if (err) reject(err);
        resolve();
      });
    });
  }
}

module.exports = Server;
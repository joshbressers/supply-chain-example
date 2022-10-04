var NodeRestServer = require('node-rest-server');

const routeConfig = {
    '/': {
        method: 'GET',
        status: 200,
        controller: () => 'Data',
    },
};

const serverConfig = {
  port: 8888,
  logger: {
      enable: true,
      debug: false,
  }
}

NodeRestServer(routeConfig, serverConfig);

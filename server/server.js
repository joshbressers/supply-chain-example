var NodeRestServer = require('node-rest-server');

const routeConfig = {
    '/': {
        method: 'GET',
        status: 200,
        controller: async () => {
            // requestData.method will be GET 
            return { status: 200, payload: { data: 'Some data' } };
        },
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

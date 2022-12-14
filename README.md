# supply-chain-example
Example supply chain project

```
$ npx express-generator

  warning: the default view engine will not be jade in future releases
  warning: use `--view=jade' or `--help' for additional options

destination is not empty, continue? [y/N] y

   create : public/
   create : public/javascripts/
   create : public/images/
   create : public/stylesheets/
   create : public/stylesheets/style.css
   create : routes/
   create : routes/index.js
   create : routes/users.js
   create : views/
   create : views/error.jade
   create : views/index.jade
   create : views/layout.jade
   create : app.js
   create : package.json
   create : bin/
   create : bin/www

   install dependencies:
     $ npm install

   run the app:
     $ DEBUG=supply-chain-example:* npm start
```

`docker build -t supplytest:latest`
`docker run --rm -p 3000:3000 supplytest:latest`

There are two components. The client and server. The client expects the
SERVERURL environment variable to be set for the client. By defaul the
client listens on port 3000 and the server listens on port 8888.

To build the contianer images
```
docker build -t joshbressers/supply-chain-example-client:latest .
docker build -t joshbressers/supply-chain-example-server:latest .
```

The push them
```
docker push joshbressers/supply-chain-example-client:latest
docker push joshbressers/supply-chain-example-server:latest
```

You can start them up in Kubernetes with
`kubectl apply -f kube`

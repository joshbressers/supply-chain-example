var express = require('express');
var router = express.Router();

const net = require('net');
const port = 8888;

/* GET users listing. */
router.get('/', function(req, res, next) {
  const client1 = new net.Socket();

  client1.connect(port,function(){
    console.log(`Cleint 1 :Connected to server on port ${port}`);

    //Try to send data to the server
    client1.write('Hi from the client 1');
  });

  //Handle data coming from the server
  client1.on('data',function(data){
    console.log(`Client 1 received from server : ${data}`);
    res.send(`Response from server: ${data}`);
  });

  // Handle connection close 
  client1.on('close',function(){
    console.log('Cleint 1 :Connection Closed');
  });

  //Handle error
  client1.on('error',function(error){
    console.error(`Connection Error ${error}`); 
  });

});

module.exports = router;

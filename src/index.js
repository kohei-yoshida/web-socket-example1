const express = require('express');
const app = express();
const appServer = app.listen(3000, () => {
  console.log(`Node.js Listening to PORT: ${appServer.address().port}`);
});

app.get('/', function(_, res) {
  res.sendFile(__dirname + '/index.html');
});

const server = require('ws').Server;
const wsServer = new server({ port:4000 });

wsServer.on('connection',function(ws) {
  ws.on('message',function(message) {
    console.log(`received: ${message}`);
    wsServer.clients.forEach(function(client) {
      const json = `{ "sent_at": ${ new Date() }, "message": ${ message } }`;
      console.log(`sent: ${json}`);
      client.send(json);
    });
  });
});

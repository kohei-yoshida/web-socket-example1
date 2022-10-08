const express = require('express');
const app = express();
const appServer = app.listen(3000, () => {
  console.log(`Node.js Listening to PORT: ${appServer.address().port}`);
});

app.get('/', function(_, res) {
  res.sendFile(__dirname + '/index.html');
});

const server = require('ws').Server;
const wss = new server({ port:4000 });

wss.on('connection',function(ws) {
  ws.on('message',function(message) {
    console.log(`received: ${message}`);
    wss.clients.forEach(function(client) {
      const json = `{ "sent_at": ${ new Date().toJSON() }, "message": ${ message } }`;
      console.log(`sent: ${json}`);
      client.send(json);
    });
  });
});

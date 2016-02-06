const express = require('express');
const app = express();
const http = require('http').Server(app);
// const WebSocket = require('ws');
// const ws = new WebSocket('ws://literature.uncontext.com');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});

// ws.on('message', function(message) {
//   console.log(message);
// });

const net = require('net');
const { IP, PORT} = require('./constants')

// Establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,//'localhost'
    port: PORT//50541
  });

  // Upon connecting get verification you have connected
  conn.on('connect', () => {
    conn.write('Name: JT');
  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  // Handle a message from the server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = connect;
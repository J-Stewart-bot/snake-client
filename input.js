let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  moves = 7;
  delay = 50;
  
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 'h') {
    connection.write('Say: HI!');
  }
  if (key === 'o') {
    connection.write('Say: OMG');
  }
  if (key === 'f') {
    connection.write('Say: !!!');
  }
  if (key === 'i') {
    for (let i = 0; i < moves; i++) {
      setTimeout(() => {
        connection.write('Move: up');
      }, i * delay);
    }
  }
  if (key === 'k') {
    for (let i = 0; i < moves; i++) {
      setTimeout(() => {
        connection.write('Move: down');
      }, i * delay);
    }
  }
  if (key === 'j') {
    for (let i = 0; i < moves; i++) {
      setTimeout(() => {
        connection.write('Move: left');
      }, i * delay);
    }
  }
  if (key === 'l') {
    for (let i = 0; i < moves; i++) {
      setTimeout(() => {
        connection.write('Move: right');
      }, i * delay);
    }
  }
};

module.exports = setupInput;
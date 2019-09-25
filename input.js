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
  
  if (key === 'p') {
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
    connection.write('Say: Vroom Vroom!');
  }
  if (key === 'o') {
    connection.write('Say: !!!!!!!!!!!!!!!!!!!!');
  }
  if (key === 'f') {
    connection.write('Say: Im gonna get you');
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
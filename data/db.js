const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'pizzas',
  port: 8889
})

connection.connect((err) => {
  // in caso di errore lo espongo
  if (err) throw err;
  // se non ci sono errori la connessione è attiva
  console.log('MySql Connesso!')

})

module.exports = connection;
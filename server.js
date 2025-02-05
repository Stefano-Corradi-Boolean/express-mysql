const express = require('express');
const app = express();
const port = 3000;

// import middleware
const checkTime = require('./middlewares/checkTime')
const errorsHandler = require('./middlewares/errorsHandler')
const notFound = require('./middlewares/notFound')

// import router
const pizzasRouter = require('./routes/pizzas')

// middleware per il controllo del tempo
app.use(checkTime)

// middleware per asst statici
app.use(express.static('public'))

// middleware il parsing del body
app.use(express.json())

// prima rotta
app.get('/', (req, res) => {
  res.send('Server pizzeria');
})

// rotta per le pizze
app.use('/pizzas', pizzasRouter)


// middleware per la gestione degli errore
app.use(errorsHandler)

// middleware per la gestione err 404
app.use(notFound)

// metto in ascolto la porta
app.listen(port, () => {
  console.log(`Sono in ascolto sulla porta ${port} `);
})

// importo la connessione al db
const connection = require('../data/db')

const index = (req, res) => {
  res.send('Elenco pizze');
}

const show = (req, res) => {

  const id = req.params.id;
  res.send(`Dettaglio pizza ${id}`);
}

//store
const store = (req, res) => {
  res.send('Creazione pizza');
}

// update
const update = (req, res) => {
  const id = req.params.id;
  res.send(`Modifica pizza ${id}`);
}

//modifica
const modify = (req, res) => {
  const id = req.params.id;
  res.send(`Modifica pizza ${id}`);
}

//delete
const destroy = (req, res) => {
  const id = req.params.id;
  res.send(`Eliminazione pizza ${id}`);
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}
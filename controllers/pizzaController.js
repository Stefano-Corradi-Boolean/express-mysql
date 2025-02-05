
// importo la connessione al db
const connection = require('../data/db')

const index = (req, res) => {
  const sql = 'SELECT * FROM pizzas';

  // effettuo la query al db
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Query al database fallita' })
    res.json(results);
  })


}

const show = (req, res) => {

  const id = req.params.id;

  const sqlPizza = 'SELECT * FROM pizzas WHERE id = ?';

  const sqlIngrediets = `SELECT I.*
  FROM ingredients I
  JOIN ingredient_pizza IP ON IP.ingredient_id = I.id
  WHERE IP.pizza_id = ?
  `

  connection.query(sqlPizza, [id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Query al database fallita' })
    // se non trovo la pizza restituisco un errore 500
    if (results.length === 0) return res.status(404).json({ error: 'Pizza non trovata' });

    // superati i controlli di errore e 404 restituisco la prima occorrenza dell'array
    let pizza = results[0];

    // effettuo la query per gli ingredienti
    connection.query(sqlIngrediets, [id], (err, ingredientsResult) => {

      if (err) return res.status(500).json({ error: 'Query al database fallita' })
      pizza.ingredients = ingredientsResult;

      res.json(pizza);
    })



  })

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
  const sql = 'DELETE FROM pizzas WHERE id = ?';

  connection.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: 'Eliminazione della pizza fallita' });
    res.sendStatus(204);
  })
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}
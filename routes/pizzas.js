const express = require('express');
const router = express.Router();

// importo il controller
const pizzasController = require('../controllers/pizzaController');

// ROTTE CRUD PER LE PIZZE

// index
router.get('/', pizzasController.index);

// show
router.get('/:id', pizzasController.show);

// store
router.post('/', pizzasController.store);

// update
router.put('/:id', pizzasController.update);

// modify
router.patch('/:id', pizzasController.modify);

// destroy
router.delete('/:id', pizzasController.destroy);

module.exports = router;
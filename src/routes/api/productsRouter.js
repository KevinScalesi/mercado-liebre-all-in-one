// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsAPIController = require('../../controllers/api/productsController');

router.get('/latest', productsAPIController.latest); /* GET - latest results */
router.get('/oferts', productsAPIController.oferts); /* GET - oferts results */
router.get('/categories/:category?', productsAPIController.categories); /* GET - categories results */
router.get('/amount',productsAPIController.amount); /* GET - amount of products*/
router.get('/total',productsAPIController.total); /* GET - amount of products*/

module.exports = router;

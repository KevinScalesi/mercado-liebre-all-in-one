// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsAPIController = require('../../controllers/api/productsController');

router.get('/latest', productsAPIController.latest); /* GET - latest results */
router.get('/oferts', productsAPIController.oferts); /* GET - oferts results */

module.exports = router;

// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const usersAPIController = require('../../controllers/api/usersController');

router.get('/total', usersAPIController.total); /* GET - total users */


module.exports = router;
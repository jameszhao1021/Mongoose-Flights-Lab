const express = require('express');
const router = express.Router();
const destiationController = require('../controllers/destinations');

/* GET home page. */
router.post('/flights/:id/destinations', destiationController.create);


module.exports = router;

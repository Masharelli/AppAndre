const express = require('express');
const router = express.Router();

//------------ Importing Controllers ------------//
const sportController = require('../controllers/sportController')
const authController = require('../controllers/authController')

router.use(express.json());

//------------ Get Sports Route ------------//
router.get('/', sportController.getSports);

//------------ Post Sports Route ------------//
router.post('/', sportController.postSports);

//------------ Delete Sport by idRoute ------------//
router.delete('/:sportId',authController.verifyUser, sportController.deleteSports);

module.exports = router;
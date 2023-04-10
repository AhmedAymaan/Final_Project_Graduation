const times_of_drugs_Controller = require('../config/times_of_drugs')

const express = require('express');
const router = express.Router();


router.get('/all-drugs', times_of_drugs_Controller.index)
router.post('/drug-by-id', times_of_drugs_Controller.show)
router.post('/store-drug', times_of_drugs_Controller.store)
router.post('/update-drug', times_of_drugs_Controller.update)
router.post('/delete-drug', times_of_drugs_Controller.destroy)

module.exports = router
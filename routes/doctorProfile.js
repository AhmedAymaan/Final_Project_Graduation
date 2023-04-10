const express = require('express');
const router = express.Router();

const dynpgfrdrController = require('../config/doctorProfile')

router.post('/updatedr', dynpgfrdrController.updateInfo)
router.post('/deletedr', dynpgfrdrController.destroy)

module.exports = router
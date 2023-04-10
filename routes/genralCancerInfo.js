const express = require('express');
const router = express.Router();
const cancer_info = require('../config/genralCancerInfo')

router.get('/all_cancer_Info', cancer_info.index)
router.post('/cancer_Info-by-id', cancer_info.show)
router.post('/store_cancer_Info', cancer_info.store)
router.post('/update_cancer_Info', cancer_info.update)
router.post('/delete_cancer_Info', cancer_info.destroy)

module.exports = router
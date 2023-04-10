const express = require("express");
const { check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../model/User");
const dbconfig = require('../config/db')

router.get('/show-all-doctors',
(req, res, next) => {

    User.find()
    .then(response => {
    res.json({
    response
    })  
})
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}
),


router.post('/show-doctor-by-id',
(req, res, next) => {
    
let doctorID = req.body.doctorID
User.findById(doctorID)
.then(response => {
res.json({
response
})
})
.catch(err => {
message : 'An error occurred'
})
}
);
module.exports = router;

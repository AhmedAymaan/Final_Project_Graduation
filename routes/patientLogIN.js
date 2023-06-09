const express = require("express");
const { check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../model/dynpgfrdr");
const dbconfig = require('../config/db')


router.post(
    "/login",
    [
    check("patientEmail", "Please enter a valid email").isEmail(),
    check("patientPassword", "Please enter a valid password").isLength({
        min: 6
    })
    ],
    async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
        errors: errors.array()
        });
    }

    const { patientEmail, patientPassword } = req.body;
    try {
        let user = await User.findOne({
        patientEmail
        });
        if (!user)
        return res.status(400).json({
            message: "User Not Exist"
        });

        const isMatch = await (patientPassword == user.patientPassword);
        if (!isMatch)
        return res.status(400).json({
            message: "Incorrect Password !"
        });

        const payload = {
        user: {
            id: user.id
        }
        };

        jwt.sign(
        payload,
        "randomString",
        {
            expiresIn: 3600
        },
        (err, token) => {
            if (err) throw err;
            res.status(200).json({
            user,
            token
            });
        }
        );
    } catch (e) {
        console.error(e);
        res.status(500).json({
        message: "Server Error"
        });
    }
    }
),
///////////////////
router.get("/logout", (req, res) => {
res.redirect("/");
  //req.logout;
});


module.exports = router;
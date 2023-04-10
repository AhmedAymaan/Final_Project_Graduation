
// Filename : user.js

const express = require("express");
const { check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../model/User");
const dynpgfrdr = require("../model/dynpgfrdr");

const dbconfig = require('../config/db')
/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */

router.post(
    "/signup",
    [
        check("name", "Please Enter a Valid name")
        .not()
        .isEmpty(),
        check("username", "Please Enter a Valid Username")
        .not()
        .isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({
            min: 6
        }),
        /* check("confirmpassword", "Please enter a confirmed password").isLength({
          min: 6
      }),*/

    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            name,
            username,
            email,
            password,
            phone,
            specialization,
            Dates
            //confirmpassword
        } = req.body;
        try {
          ///////////
          const userName = await User.findOne({
            username: req.body.username
          });
          if (userName) {
            return res
              .status(409)
              .json({ message: 'Username already exist' });
          }
          ////////////
            let user = await User.findOne({
                email
            });
            if (user) {
                return res.status(400).json({
                    msg: "User Already Exists"
                });
            }

            user = new User({
                name,
                username,
                email,
                password,
                phone,
                specialization,
                Dates
                //confirmpassword
            });
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            //user.confirmpassword = await bcrypt.hash(confirmpassword, salt);

            /* if (user.password !== user.confirmpassword) { 
            res.json({
              message: 'Passwords do not match.'
              })
          }else {*/
          await user.save();
          //}
          
            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                "randomString", {
                    expiresIn: 10000
                },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                      user,
                      token
                    });
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Saving");
        }
    }
);
router.post(
    "/signin",
    [
      check("email", "Please enter a valid email").isEmail(),
      check("password", "Please enter a valid password").isLength({
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
  
      const { email, password } = req.body;
      try {
        let user = await User.findOne({
          email
        });
        if (!user)
          return res.status(400).json({
            message: "User Not Exist"
          });
  
        const isMatch = await bcrypt.compare(password, user.password);
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


 /* router.get('/all-patients',
  (req, res, next) => {
    dynpgfrdr.find()
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

  
router.post('/patient-by-id',
(req, res, next) => {
    
let patientID = req.body.patientID
  dynpgfrdr.findById(patientID)
  .then(response => {
  res.json({
  response
  })
})
  .catch(err => {
  message : 'An error occurred'
})
}
),*/
router.get("/logout", (req, res) => {
  res.redirect("/");
  //req.logout;
  });


module.exports = router;
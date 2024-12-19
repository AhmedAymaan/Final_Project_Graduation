const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");
//Routes
const doctorUser = require("./routes/user"); //new addition
const dynpgfrdrRoute = require("./routes/dynpgfrdr"); 
const changepassword = require("./routes/changepassword");
const patientUser = require("./routes/patientLogIN");
const allDoctors = require("./routes/allDoctors");
const doctorProfile = require("./routes/doctorProfile");
const cancer_Type = require('./routes/genralCancerInfo');
const times_of_drugs = require('./routes/times_of_drugs');
//
//
//
//
//
//
//
//
//

































//const cors = require('cors');
//const cookieParser = require('cookie-parser');
const auth = require('./routes/resetpassword');
//
// Initiate Mongo Server
InitiateMongoServer();

const app = express();
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
app.use(cors());
// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});
//Log Out 

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/doctor", doctorUser);
app.use("/patient", patientUser);
app.use("/alldoctors", allDoctors);
app.use("/doctorprofile", doctorProfile);
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Hospital Management System ',
      version: '1.0.0',
      description: 'Hospital Management System API information for System analysis - 1 ',
    },
    servers: [
      {
        url: 'https://pleasant-comfort-production-f2ef.up.railway.app',
      },
    ],
  },
  apis: ['./routes/*.js'], // Define paths to files containing annotations
};
const spacs = swaggerJsDoc(options)
app.use(
  "/api-docs" ,
  swaggerUi.serve ,
  swaggerUi.setup(spacs)
)
app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});


//Cruds
app.use('/api/patient', dynpgfrdrRoute)
app.use('/setting', auth)
require('./helpers/extend-node-input-validator')
app.use('/changepassword',changepassword )
app.use('/cancer', cancer_Type)
app.use('/drug_times', times_of_drugs)





//Addition Of Images:



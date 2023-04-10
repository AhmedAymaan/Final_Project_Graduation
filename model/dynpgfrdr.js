const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PatientSchemaByDoctor = new Schema({
    patientName: {
        type: String
    },
    patientAge: {
        type: Number
    },
    patientPhoneNumber: {
        type: String
    },
    patientUsername: {
        type: String
    },
    patientEmail: {
        type: String
    },
    patientPassword: {
        type: String
    },
    cancerType: {
        type: String
    },
    diagnosisOfDisease: {
        type: String
    },
    drugs_names: {
        type: String
    },
    patientGender: {
        type: String
    },
    dateofVisit: {
        type: Date,
        default: Date.now()
    },
    //Images : Start Point =>
    //Image :
    avatar:{
		type:String
	},
    // ID of Image in Cloudinary :
	cloudinary_id:{
		type: String
	},
    //End Of Images.
    xraysImages: {
        type: String
    },
    drugSheetImages: {
        type: String
    },
    doctorInstructionsAndNotes: {
        type: String
    },
}) 

const PatientSchByDoctor = mongoose.model('PatientSchByDoctor', PatientSchemaByDoctor);
module.exports = PatientSchByDoctor;
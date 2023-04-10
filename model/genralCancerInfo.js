const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const genralCancerInfo = new Schema({
cancer_name : {
    type : String
},
cancer_info : {
    type : String
},
symptoms_of_cancer : {
    type : String
}
}) 

const GenralCancerInfo = mongoose.model('genralCancerInfo', genralCancerInfo);
module.exports = GenralCancerInfo;


















//*******************************************************************
    
  /*  NonmelanomaSkinCancer: {
        type: String
    },
    BreastCancer: {
        type: String
    },
    LungCancer: {
        type: String
    },
    ProstateCancer: {
        type: String
    },
    ColonandRectalCancers: {
        type: String
    },
    Melanoma: {
        type: String
    },
    cancerType: {
        type: String
    },
    BladderCancer: {
        type: String
    },
    NonHodgkinsLymphoma: {
        type: String
    },
    KidneyCancer: {
        type: String
    },
    Leukemia: {
        type: Date,
        default: Date.now()
    },
    PancreaticCancer: {
        type: String
    },
    ThyroidCancer: {
        type: String
    },
    LiverCancer: {
        type: String
    },
    EndometrialCancer: {
        type: String
    },*/
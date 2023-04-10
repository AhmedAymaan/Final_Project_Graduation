const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const times_of_Drugs = new Schema({
    drug_name : {
        type : String,
        required : "Name of Drug is Required."
    },
    how_often : {
        type : Number,
        required : "The Number Of Times The Drug is Taken is Required."
    },
    time_one : {
        type : String,
        required : "Time For Taking Drug is Required."
    },
    time_two : {
        type : String
    },
    time_three : {
        type : String
    },
    usage_of_drug : {
        type : String
    }
}) 

const times_of_drugs = mongoose.model('times_of_drugs ', times_of_Drugs);
module.exports = times_of_drugs;
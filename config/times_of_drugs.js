const times_of_Drugs = require('../model/times_of_drugs');
// Show the All Times of Drugs.
const index = (req, res, next) => {
    User.find()
    .then(response => {
    res.json({
    response
    })  
})
    .catch(error => {
        res.json({
            message: 'An error Occured...!'
        })
    })
}

//Show a Drug Name and It's Times By ID
const show = (req, res, next) => {
    let drugID = req.body.drugID
    User.findById(drugID)
    .then(response => {
    res.json({
    response
})
})
    .catch(err => {
        message : 'An error occurred...!'
})

}


//Adding a New Drug Name and It's Times
const store = (req, res, next) => { 
let drug = new times_of_Drugs({
    drug_name : req.body.drug_name,
    how_often : req.body.how_often,
    time_one : req.body.time_one,
    time_two : req.body.time_two,
    time_three : req.body.time_three,
    usage_of_drug : req.body.usage_of_drug

})

    drug.save()
    .then(response => {
        res.json({
            message: ' Drug Name and It\'s Times Added Successfully!'
    })
})
    .catch(error =>{
        res.json({
            message:'An error occurred!!!'
    })

})

}

//Update  Drug Name and It's Times By ID
const update = (req, res, next) => { 
let drugID = req.body.drugID
let updatedData = {
    drug_name : req.body.drug_name,
    how_often : req.body.how_often,
    time_one : req.body.time_one,
    time_two : req.body.time_two,
    time_three : req.body.time_three,
    usage_of_drug : req.body.usage_of_drug
}

times_of_Drugs.findByIdAndUpdate(drugID, {$set: updatedData})
.then(() => {
res.json({
    message: 'Drug and It\'s Times updated successfully!'
    })
})
    .catch(error => {
        res.json({
            message: 'An error Occured!'
    })
})
}

//Delete Drug and It's Times

const destroy = (req, res, next) => { 
    let drugID = req.body.drugID
    times_of_Drugs.findByIdAndRemove(drugID)
.then(() => {
    res.json({
        message: 'Drug and It\'s Times Deleted successfully!!!'
    })
})
    .catch(error => {
        res.json({
        message: 'An error Occured!!!'
    })
})
}
module.exports = {
    index,          // Show Set of Drugs and It's Times.
    show,          //Show a Drug and It's Times By ID.
    store,        //Adding a Drug and It's Times.
    update,      //update a Drug and It's Times.
    destroy     //delete a  Drug and It's Times.
}
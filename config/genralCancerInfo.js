const cancer_Type = require('../model/genralCancerInfo.js');
//const dynpgfrdr = require('../model/dynpgfrdr');


// Show the list of All Cancer's Information.
const index = (req, res, next) => {
    cancer_Type.find()
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

//Show an Cancer's Informatio BY ID.
const show = (req, res, next) => {
    let cancerTypeID = req.body.cancerTypeID
    cancer_Type.findById(cancerTypeID)
    .then(response => {
    res.json({
    response
})
})
    .catch(err => {
        message : 'An error occurred'
})

}


//Adding a New Cancer's Information.
const store = (req, res, next) => { 
let cancerType = new cancer_Type({
    cancer_name: req.body.cancer_name,
    cancer_info: req.body.cancer_info,
    symptoms_of_cancer: req.body.symptoms_of_cancer,

})

cancerType.save()
    .then(response => {
        res.json({
            message: 'New Cancer\'s Information Added Successfully!'
    })
})
    .catch(error =>{
        res.json({
            message:'An error occurred!!!'
    })

})

}

//Update Cancer's Information BY ID.
const update = (req, res, next) => { 
let cancerTypeID = req.body.cancerTypeID
let updatedData = {
    cancer_name: req.body.cancer_name,
    cancer_info: req.body.cancer_info,
    symptoms_of_cancer: req.body.symptoms_of_cancer,
}

cancer_Type.findByIdAndUpdate(cancerTypeID, {$set: updatedData})
.then(() => {
res.json({
    message: 'Cancer\'s Information updated successfully!'
    })
})
    .catch(error => {
        res.json({
            message: 'An error Occured!'
    })
})
}

//Delete Cancer's Information BY ID.

const destroy = (req, res, next) => { 
    let cancerTypeID = req.body.cancerTypeID
    cancer_Type.findByIdAndRemove(cancerTypeID)
.then(() => {
    res.json({
        message: 'Cancer\'s Information deleted successfully!!!'
    })
})
    .catch(error => {
        res.json({
        message: 'An error Occured!!!'
    })
})
}
module.exports = {
    index,          // Show the list of All Cancer's Information.
    show,          //Show the Cancer's Information BY ID.
    store,        //Adding a New Cancer's Information.
    update,      //update a Cancer's Information BY ID.
    destroy     //delete a Cancer's Information BY ID.
}
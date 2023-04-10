const express = require('express');
const router = express.Router();
const upload=require('../utils/multer'); 
const cloudinary=require('../utils/cloudinary'); 
//const path= require('path')
const dynpgfrdrController=require('../config/dynpgfrdr'); 
const dbconfig = require('../config/db'); 
 
/*
router.post('/store',upload.single('image'), async(req,res)=>{ 
 try{ 
  const result=await cloudinary.uploader.upload(req.file.path); 
  let patient=new patientInfo({ 
    patientName: req.body.patientName, 
    patientAge: req.body.patientAge, 
    patientPhoneNumber: req.body.patientPhoneNumber, 
    patientUsername: req.body.patientUsername, 
    patientEmail: req.body.patientEmail, 
    patientPassword:req.body.patientPassword, 
    cancerType: req.body.cancerType, 
    diagnosisOfDisease: req.body.diagnosisOfDisease, 
    drugs: req.body.drugs, 
    patientGender: req.body.patientGender, 
    avatar: result.secure_url, 
    cloudinary_id:result.public_id, 
    xraysImages: req.body.xraysImages, 
    drugSheetImages: req.body.drugSheetImages, 
    doctorInstructionsAndNotes: req.body.doctorInstructionsAndNotes 
    
  }); 
  await patient.save(); 
  res.json(patient) 
 
 }catch(err){ 
  console.log(err) 
 } 
});
 
router.get('/',async(req,res)=>{ 
    try{ 
     let Photo= await photo.find(); 
     res.json(Photo) 
    }catch(err){ 
     console.log(err) 
    } 
   })


   module.exports= router;

*/








































router.get('/all-patients', dynpgfrdrController.index)
router.post('/patient-by-id', dynpgfrdrController.show)
router.post('/store', upload.single('image'),dynpgfrdrController.store)
router.put('/update/:id',upload.single('image'), dynpgfrdrController.update)
router.delete('/delete/:id',upload.single('image'), dynpgfrdrController.destroy)

module.exports = router

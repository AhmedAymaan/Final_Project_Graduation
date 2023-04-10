const router=require('express').Router();
const profileController=require('../config/changepassword')
const middleware=require('./../helpers/middleware');
router.get('/current-user',profileController.current_user);
router.post('/change-password',profileController.change_password);
router.put('/update-profile',profileController.update_profile); //delete
module.exports=router;
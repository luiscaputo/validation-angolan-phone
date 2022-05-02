const Router = require('express');
const ValidateAngolanPhoneController = require('../controllers/validateAngolanPhone.controller'); 
const validateAngolanPhoneController = new ValidateAngolanPhoneController();

const router = Router();

router.get('/', (req, res) =>{
    res.status(200).json('Server is running');
});

router.get('/validate/:phone', validateAngolanPhoneController.handle);

module.exports = router;
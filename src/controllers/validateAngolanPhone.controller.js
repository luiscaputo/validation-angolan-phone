const validateAngolanPhoneService = require('../service/validateAngolanPhone.service');

class ValidateAngolanPhoneController {
    async handle(req, res) {
        try {
            const { phone } = req.params;

            const service = new validateAngolanPhoneService();
    
            const validate = await service.execute(phone);
    
            return res.status(200).json({ success: true, message: 'Processed', data: validate });
    
        }catch(e) {
            return res.status(500).json({ success: false, message: e.message });
        }
    }
}

module.exports = ValidateAngolanPhoneController;
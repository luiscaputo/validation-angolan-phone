class ValidateAngolanPhoneService {
    async execute(phoneNumber) {
        if(phoneNumber === ""){
            throw new Error('Invalid phone number');
        }

        const phoneNumberLength = phoneNumber.length;

        if (!phoneNumber.match(/^[0-9]*$/)) {
            throw new Error('Invalid Angolan Phone Number');
        }

        if (phoneNumberLength < 9 || phoneNumberLength > 9) {
            throw new Error('Invalid Angolan Phone Number');
        }
        const firstDigit = phoneNumber.substring(0, 1);

        if (firstDigit !== '9') {
            throw new Error('Invalid Angolan Phone Number');
        }
        const secondDigit = phoneNumber.substring(1, 2);

        if(secondDigit === '2' || secondDigit === '3' || secondDigit === '4' ){
            return 'This is Angolan Number - Unitel';
        } 
        else if(secondDigit === '1' || secondDigit === '9'){
            return 'This Is Angolan Number - Movicel';
        }
        else if(secondDigit === '5'){
            return 'This Is Angolan Number - Africell';
        }else
            return 'This Is Not Angolan Number';
    }
}

module.exports = ValidateAngolanPhoneService;

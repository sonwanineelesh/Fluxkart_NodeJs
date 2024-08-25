// fluxkartServiceImpl.js
const Fluxkart = require('./Fluxkart');
const ContactResponse = require('./ContactResponse');

const identify = async (dto) => {
    const contactByPhoneNumber = await Fluxkart.find({ phoneNumber: dto.phoneNumber });
    const contactByEmail = await Fluxkart.find({ email: dto.email });
    let idByEmail = 0;
    let emails = [];
    let phoneNumbers = [];
    let secondaryContactIds = [];
    let linkPre1 = "";
    let numByEmail = null;
    let em = null;

    contactByEmail.forEach(responseEmail => {
        if (responseEmail) {
            linkPre1 = responseEmail.linkPrecedence;
            idByEmail = responseEmail.id; // 11
            em = responseEmail.email;
            numByEmail = responseEmail.phoneNumber; // 919191
        }
    });

    for (const response of contactByPhoneNumber) {
        if (linkPre1 === "Primary") {
            response.linkedId = idByEmail;
            response.linkPrecedence = "Secondary";
            emails.push(em); // goerge
            phoneNumbers.push(numByEmail); // 919191
        }
    }

    if (contactByPhoneNumber.length !== 0) {
        return await searching(contactByPhoneNumber, contactByEmail, emails, phoneNumbers, secondaryContactIds);
    }

    if (contactByEmail.length !== 0) {
        for (const response of contactByEmail) {
            const phoneByEmail = await Fluxkart.find({ phoneNumber: response.phoneNumber });
            return await searching(phoneByEmail, contactByEmail, emails, phoneNumbers, secondaryContactIds);
        }
    }
    
    return null;
};

const searching = async (byPhoneNumber, byEmail, emails, phoneNumbers, secondaryContactIds) => {
    const contactResponse = new ContactResponse();
    const result = {};

    byPhoneNumber.forEach(response => {
        emails.push(response.email); // biff
        phoneNumbers.push(response.phoneNumber);
        if (response.linkPrecedence === "Secondary") {
            secondaryContactIds.push(response.id); // 27
            contactResponse.primaryContactId = response.linkedId;
        } else {
            contactResponse.primaryContactId = response.id;
        }
    });

    emails = [...new Set(emails)];
    phoneNumbers = [...new Set(phoneNumbers)];

    contactResponse.email = emails;
    contactResponse.phoneNumber = phoneNumbers;
    contactResponse.secondaryContactId = secondaryContactIds;

    await contactResponse.save();

    result.contact = contactResponse;

    return result;
};




module.exports = {
    
    identify,
};

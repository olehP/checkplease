
export function hoverFormPart(e){
    deleteHelpPopup();
    let boxClass = e.target.className.split(' ');
    let boxName = boxClass[boxClass.length - 1];
    var helpText = null;
    switch(boxName){
        case "eligibility1":helpText = 'The A-Number on your Permanent Resident Card (also known as the “Green Card”) consists of 7 to 9 numbers';break;
        case "eligibility2":helpText = 'See the Immigration and Nationality Act (INA) section 319(b) <a href = "#">Click here for further instructions</a>'; break;
        case "personal1":helpText = 'Do not provide a nickname. Your current legal name is the name on your birth certificate unless it has been changed after birth by a legal action such as a marriage or court order.';break;
        case "personal2": helpText = "Write your name exactly as it appears on your Permanent Resident Card, even if it is misspelled on your card. Don't fill if you do not have a Permanent Resident Card";break;
        case "personal3": helpText = "Include nicknames, aliases, and maiden name if applicable";break;
        case "citizenship1": helpText = "Provide your U.S. Social Security Number. Don't fill if you do not have one."; break;
        case "citizenship2": helpText = "If any";break;
        case "citizenship3": helpText = "This is the official date when your Permanent Residence began as shown on your Green Card";break;
        case "citizenship4": helpText = "This is the country where you were physically born. Write the name of the country at the time of your birth, even if the name has changed";break;
        case "citizenship5": helpText = "This is the name of the country where you currently a citizen or national. If you are stateless, write the name of the last country where you were a citizen or national. If you have multiple citizenships, write the name of the foreign country that issued your last passport";break;
        case "personalOther1": helpText = "If you believe that you need USCIS to accommodate your disability and/or impairment, select “Yes";break;
        case "personalOther2": helpText = "Disabilities and/or mental impairment must be verified with a doctor. If you select Yes, you must submit a completed Form N-648, “Medical Certification for Disability Exception” after seeing a doctor.";break;
        case "personalOther3": helpText = "Based on the information you have provided (Date of Birth and Date you became a Permanent Resident) ";break;
        case "contact1": helpText = "This field is required. At a minimum, provide your daytime phone number and email address, and as many other forms of contact as you can";break;
        case "contact2": helpText = "This field is required";break;
        case "contact3": helpText = "This field is required";break;
        case "residence1": helpText = "List every address where you have lived at during the last 5 years, beginning with where you are living immediately prior to filing your application (this is typically where you are living now). Ensure that there are no time gaps in your addresses";break;
        case "residence2": helpText = "Do not provide a Post Office (PO) Box number here unless that is your only address";break;
        case "residence3": helpText = "Apartment-suite-floor-number. If applicable";break;
        case "residence4": helpText = "4 digit code is not required if you do not have a ZIP or Postal Code";break;
        case "parents1": helpText = "If your biological or legally adoptive mother or father is a U.S. citizen by birth, or naturalized before you reached your 18th birthday, you may already be a U.S. citizen.Visit the USCIS Web site at www.uscis.gov for further information on this topic before you consider filing Form N-400.";break;
        case "biographic1": helpText = "Hispanic or Latino is defined as a person of Cuban, Mexican, Puerto Rican, South or Central American, or other Spanish culture or origin, regardless of race";break;
        case "biographic2": helpText = "Select all applicable boxes";break;
        case "biographic3": helpText = "Do not write your height in meters or centimeters ";break;
        case "biographic4": helpText = "Select the items that best describe your natural features (i.e. as you were born) - this may not be how you appear now";break;
        case "disabilities1": helpText = "If you are requesting a sign-language interpreter, indicate for which language ";break;
        case "disabilities2": helpText = "Describe the nature of your disability and/or impairment and the accommodation you are requesting";break;
        
        default: return;
    }
    $('.helpComponent').append('<p class = "helpPopup" style = "margin-top:' +e.target.offsetTop +'px">'+helpText+'</p>');
};

export function deleteHelpPopup(){
    var list = document.getElementsByClassName("helpComponent")[0];
    var listOfHelp = $('.helpPopup');
    if(listOfHelp){
        for(let i = 0;i<listOfHelp.length;i++){
        list.removeChild(listOfHelp[i]);
        };
    };
}
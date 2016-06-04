import { CALL_API } from './../../../middleware/api.js';
let actions = {
    previousFormStep: function(){
        return{
            type: 'PREVIOUS_FORM_STEP'
            }
    }, 
    nextFormStep: function(){
        return{
            type: 'NEXT_FORM_STEP'
            }
    },
    pathChanged: function(path){
        return{
            type: 'PATH_CHANGED',
            path:path
            }
    },
    nineDigitChanged: function(val){
        return{
            type:"9DIGIT_CHANGED",
            val:val
        }
    },
    reasonOfStayingChanged: function(val){
        return{
            type:"REASON_OF_STAYING_CHANGED",
            val:val
        }
    },
    personalFirstNameChanged: function(val){
        return{
            type:"PERSONAL_FIRSTNAME_CHANGED",
            val:val
        }
    },
    personalMiddleNameChanged: function(val){
        return{
            type:"PERSONAL_MIDDLENAME_CHANGED",
            val:val
        }
    },
    personalLastNameChanged: function(val){
        return{
            type:"PERSONAL_LASTNAME_CHANGED",
            val:val
        }
    },
    personalCardFirstNameChanged: function(val){
        return{
            type:"PERSONAL_CARD_FIRSTNAME_CHANGED",
            val:val
        }
    },
    personalCardMiddleNameChanged: function(val){
        return{
            type:"PERSONAL_CARD_MIDDLENAME_CHANGED",
            val:val
        }
    },
    personalCardLastNameChanged: function(val){
        return{
            type:"PERSONAL_CARD_LASTNAME_CHANGED",
            val:val
        }
    },
    personalUsedNamesChanged: function(val){
        return{
            type:"PERSONAL_USED_NAMES_CHANGED",
            val:val
        }
    },
    personalWantNewNameChanged: function(val){
        return{
            type:"PERSONAL_WANT_NEW_NAME_CHANGED",
            val:val
        }
    },
    citizenshipSsnChanged: function(val){
        return{
            type:"CITIZENSHIP_SSN_CHANGED",
            val:val
        }
    },
    citizenshipUSCISChanged: function(val){
        return{
            type:"CITIZENSHIP_USCIS_CHANGED",
            val:val
        }
    }, 
    citizenshipGenderChanged: function(val){
        return{
            type:"CITIZENSHIP_GENDER_CHANGED",
            val:val
        }
    },
    citizenshipDOBChanged: function(val){
        return{
            type:"CITIZENSHIP_DOB_CHANGED",
            val:val
        }
    },
    citizenshipBecomeDateChanged: function(val){
        return{
            type:"CITIZENSHIP_BECOME_DATE_CHANGED",
            val:val
        }
    },
    citizenshipContryOfBirthChanged: function(val){
        return{
            type:"CITIZENSHIP_COUNTRY_OF_BIRTH_CHANGED",
            val:val
        }
    }, 
    citizenshipCountryOfCitizenshipChanged: function(val){
        return{
            type:"CITIZENSHIP_COUNTRY_OF_CITIZENSHIP_CHANGED",
            val:val
        }
    },
    personalOtherChanged: function(val){
        return{
            type:"PERSONAL_OTHER_CHANGED",
            val:val
        }
    },
    contactDayPhoneChanged: function(val){
        return{
            type:"CONTACT_DAY_PHONE_CHANGED",
            val:val
        }
    },
    contactEvePhoneChanged: function(val){
        return{
            type:"CONTACT_EVE_PHONE_CHANGED",
            val:val
        }
    },
    contactEmailChanged: function(val){
        return{
            type:"CONTACT_EMAIL_CHANGED",
            val:val
        }
    },
    disablitiesRequestHomeChanged: function(val){
        return{
            type:"DISABILITES_REQUEST_HOME_CHANGED",
            val:val
        }
    },
    disablitiesBlindChanged: function(val){
        return{
            type:"DISABILITES_BLIND_CHANGED",
            val:val
        }
    },
    disablitiesDeafChanged: function(val){
        return{
            type:"DISABILITES_DEAF_CHANGED",
            val:val
        }
    },
    disablitiesAnotherChanged: function(val){
        return{
            type:"DISABILITES_ANOTHER_CHANGED",
            val:val
        }
    },
    residenceFromChanged: function(val){
        return{
            type:"RESIDENCE_FROM_CHANGED",
            val:val
        }
    },
    residenceHomeNumberChanged: function(val){
        return{
            type:"RESIDENCE_HOME_NUMBER_CHANGED",
            val:val
        }
    },
    residenceToChanged: function(val){
        return{
            type:"RESIDENCE_TO_CHANGED",
            val:val
        }
    },
    residenceAdressOutsideChanged: function(val){
        return{
            type:"RESIDENCE_ADRESS_OUTSIDE_CHANGED",
            val:val
        }
    },
    residenceStreetNameChanged: function(val){
        return{
            type:"RESIDENCE_STREET_NAME_CHANGED",
            val:val
        }
    },
    residenceHomeTypeChanged: function(val){
        return{
            type:"RESIDENCE_HOME_TYPE_CHANGED",
            val:val
        }
    },
    residenceCityChanged: function(val){
        return{
            type:"RESIDENCE_CITY_CHANGED",
            val:val
        }
    },
    residenceZipChanged: function(val){
        return{
            type:"RESIDENCE_ZIP_CHANGED",
            val:val
        }
    },
    residenceOptionlChanged: function(val){
        return{
            type:"RESIDENCE_OPTIONAL_CHANGED",
            val:val
        }
    },
    residenceStateChanged: function(val){
        return{
            type:"RESIDENCE_STATE_CHANGED",
            val:val
        }
    },
    isMailingAdressSameChanged: function(val){
        return{
            type:"RESIDENT_SAME_MAILING_ADRESS_CHANGED",
            val:val
        }
    },
    //Authentification actions========================================================
    
    requestLogin:function(creds) {
      return {
        type: "LOGIN_REQUEST",
        isFetching: true,
        isAuthenticated: false,
        creds
      }
    },

    receiveLogin: function(user) {
      return {
        type: "LOGIN_SUCCESS",
        isFetching: false,
        isAuthenticated: true,
        id_token: user.client_id
      }
    },

    loginError:function(message) {
      return {
        type: "LOGIN_FAILURE",
        isFetching: false,
        isAuthenticated: false,
        message
      }
    },
    requestLogout:function requestLogout() {
      return {
        type: "LOGOUT_REQUEST",
        isFetching: true,
        isAuthenticated: true
      }
    },

    receiveLogout:function() {
      return {
        type: "LOGOUT_SUCCESS",
        isFetching: false,
        isAuthenticated: false
      }
    },
    requestSignup:function requestLogout() {
      return {
        type: "REQUEST_SIGNUP",
        isFetching: true,
      }
    },
    signupSuccess:function requestLogout() {
      return {
        type: "SIGNUP_SUCCESS",
        isFetching: false,
      }
    },
}

module.exports = actions;
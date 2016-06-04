import objectAssign from 'object-assign-deep';

let reducer = function (state = initialState, action) {
  switch (action.type) {
    case 'PREVIOUS_FORM_STEP':
          if(state.activeFormStep>0){
           return Object.assign({}, state, {
               activeFormStep:state.activeFormStep-1
           })}
          else return state;
    case 'NEXT_FORM_STEP':
          let pathNumber  = state.activeFormStep;
          let nameOfCurrentStep = state.formSteps[pathNumber].toLowerCase(); 
          console.log(nameOfCurrentStep);
           return Object.assign({}, state, {
               activeFormStep:state.activeFormStep+1
           });
    case 'PATH_CHANGED':
           let path = action.path.split('/');
           let nextPath = path[path.length-1];
           let currentPath = state.activePath.toLowerCase();
//           let isPageFilled = false, pageFilledObj;
//           for(var key in state.formInputsState){
//               if(key == currentPath){pageFilledObj = state.formInputsState[key];break;}
//           };
//          for(var key in pageFilledObj){
//                if(!pageFilledObj[key]){isPageFilled = false;break}
//                else isPageFilled = true;
//          }
//          console.log(isPageFilled); FOR DONE STEPS FUNCTIONALITY
           
           return Object.assign({}, state, {
               activePath:nextPath,
               activeFormStep: state.formSteps.indexOf(currentPath)
           });
      case '9DIGIT_CHANGED':
           return Object.assign({}, state, {
               formInputsState:Object.assign({},state.formInputsState,
                      {
                        eligibility:Object.assign({},state.formInputsState.eligibility,{
                            nineDigit:action.val 
               })                     
             })
           });
      case 'REASON_OF_STAYING_CHANGED':
          var res = {formInputsState:{eligibility:{reasonOfStaying:action.val}}};
           return objectAssign({},state,res);
          
      case 'PERSONAL_FIRSTNAME_CHANGED':
          var res = {formInputsState:{personal:{firstName:action.val}}};
           return objectAssign({},state,res);
      case 'PERSONAL_MIDDLENAME_CHANGED':
          var res = {formInputsState:{personal:{middleName:action.val}}};
           return objectAssign({},state,res);
      case 'PERSONAL_LASTNAME_CHANGED':
          var res = {formInputsState:{personal:{lastName:action.val}}};
           return objectAssign({},state,res);
      case 'PERSONAL_CARD_FIRSTNAME_CHANGED':
          var res = {formInputsState:{personal:{cardFirstName:action.val}}};
           return objectAssign({},state,res);
      case 'PERSONAL_CARD_MIDDLENAME_CHANGED':
          var res = {formInputsState:{personal:{cardMiddleName:action.val}}};
           return objectAssign({},state,res);
      case 'PERSONAL_CARD_LASTNAME_CHANGED':
          var res = {formInputsState:{personal:{cardLastName:action.val}}};
           return objectAssign({},state,res);
      case 'PERSONAL_USED_NAMES_CHANGED':
          var res = {formInputsState:{personal:{usedOtherNames:action.val}}};
           return objectAssign({},state,res);
      case 'PERSONAL_WANT_NEW_NAME_CHANGED':
          var res = {formInputsState:{personal:{wantToChangeName:action.val}}};
           return objectAssign({},state,res);
      case 'CITIZENSHIP_SSN_CHANGED':
          var res = {formInputsState:{citizenship:{ssn:action.val}}};
           return objectAssign({},state,res);
      case 'CITIZENSHIP_USCIS_CHANGED':
          var res = {formInputsState:{citizenship:{USCIS:action.val}}};
           return objectAssign({},state,res);
      case 'CITIZENSHIP_GENDER_CHANGED':
          var res = {formInputsState:{citizenship:{gender:action.val}}};
           return objectAssign({},state,res);
      case 'CITIZENSHIP_DOB_CHANGED':
          var res = {formInputsState:{citizenship:{DOB:action.val}}};
           return objectAssign({},state,res);
      case 'CITIZENSHIP_BECOME_DATE_CHANGED':
          var res = {formInputsState:{citizenship:{dateBecomingResident:action.val}}};
           return objectAssign({},state,res);
      case 'CITIZENSHIP_COUNTRY_OF_BIRTH_CHANGED':
          var res = {formInputsState:{citizenship:{countryOfBirth:action.val}}};
           return objectAssign({},state,res);
      case 'CITIZENSHIP_COUNTRY_OF_CITIZENSHIP_CHANGED':
          var res = {formInputsState:{citizenship:{countryOfCitizenship:action.val}}};
           return objectAssign({},state,res);
      case 'PERSONAL_OTHER_CHANGED':
          var res = {formInputsState:{personalOther:{cantUnderstandEnglish:action.val}}};
           return objectAssign({},state,res);
      case 'CONTACT_DAY_PHONE_CHANGED':
          var res = {formInputsState:{contact:{dayPhone:action.val}}};
           return objectAssign({},state,res);
      case 'CONTACT_EVE_PHONE_CHANGED':
          var res = {formInputsState:{contact:{eveningPhone:action.val}}};
           return objectAssign({},state,res);
      case 'CONTACT_EMAIL_CHANGED':
          var res = {formInputsState:{contact:{email:action.val}}};
           return objectAssign({},state,res);
      case 'DISABILITES_REQUEST_HOME_CHANGED':
          var res = {formInputsState:{disablities:{wantToGetApparrment:action.val}}};
           return objectAssign({},state,res);
      case 'DISABILITES_BLIND_CHANGED':
          var res = {formInputsState:{disablities:{blind:action.val}}};
           return objectAssign({},state,res);
      case 'DISABILITES_DEAF_CHANGED':
          var res = {formInputsState:{disablities:{deaf:action.val}}};
           return objectAssign({},state,res);
      case 'DISABILITES_ANOTHER_CHANGED':
          var res = {formInputsState:{disablities:{anotherImpact:action.val}}};
           return objectAssign({},state,res);
      case 'RESIDENCE_FROM_CHANGED':
          var res = {formInputsState:{residence:{residentFrom:action.val}}};
           return objectAssign({},state,res);
      case 'RESIDENCE_TO_CHANGED':
          var res = {formInputsState:{residence:{residentTo:action.val}}};
           return objectAssign({},state,res);
      case 'RESIDENCE_ADRESS_OUTSIDE_CHANGED':
          var res = {formInputsState:{residence:{isAdressOutsideUS:action.val}}};
           return objectAssign({},state,res);
      case 'RESIDENCE_STREET_NAME_CHANGED':
          var res = {formInputsState:{residence:{streetName:action.val}}};
           return objectAssign({},state,res);
      case 'RESIDENCE_HOME_NUMBER_CHANGED':
          var res = {formInputsState:{residence:{homeNumber:action.val}}};
           return objectAssign({},state,res);
      case 'RESIDENCE_HOME_TYPE_CHANGED':
          var res = {formInputsState:{residence:{homeType:action.val}}};
           return objectAssign({},state,res);
      case 'RESIDENCE_CITY_CHANGED':
          var res = {formInputsState:{residence:{city:action.val}}};
           return objectAssign({},state,res);
      case 'RESIDENCE_ZIP_CHANGED':
          var res = {formInputsState:{residence:{zip:action.val}}};
           return objectAssign({},state,res);
      case 'RESIDENCE_OPTIONAL_CHANGED':
          var res = {formInputsState:{residence:{optionl:action.val}}};
           return objectAssign({},state,res);
      case 'RESIDENCE_STATE_CHANGED':
          var res = {formInputsState:{residence:{state:action.val}}};
           return objectAssign({},state,res);
      case 'RESIDENT_SAME_MAILING_ADRESS_CHANGED':
          var res = {formInputsState:{residence:{isMailingAdressSame:action.val}}};
           return objectAssign({},state,res);
          //Authentification reducer
        case "LOGIN_REQUEST":
          return Object.assign({}, state, {
            isFetching: true,
            isAuthenticated: false,
            user: action.creds
          })
        case "LOGIN_SUCCESS":
          return Object.assign({}, state, {
            isFetching: false,
            isAuthenticated: true,
            errorMessage: ''
          })
        case "LOGIN_FAILURE":
          return Object.assign({}, state, {
            isFetching: false,
            isAuthenticated: false,
            errorMessage: action.message
          })
        case "LOGOUT_SUCCESS":
          return Object.assign({}, state, {
            isFetching: true,
            isAuthenticated: false
          })
        case "REQUEST_SIGNUP":
            return Object.assign({}, state, {
            isFetching: true,
          })
        case "SIGNUP_SUCCESS":
            return Object.assign({}, state, {
            isFetching: false,
          })
            default:
                return state
  }
};

module.exports =  reducer;


//When changing of filling the form state
//$('#percent').on('change', function(){
//  var val = parseInt($(this).val());
//  var $circle = $('#svg #bar');
//  
//  if (isNaN(val)) {
//   val = 100; 
//  }
//  else{
//    var r = $circle.attr('r');
//    var c = Math.PI*(r*2);
//   
//    if (val < 0) { val = 0;}
//    if (val > 100) { val = 100;}
//    
//    var pct = ((100-val)/100)*c;
//    
//    $circle.css({ strokeDashoffset: pct});
//    
//    $('#cont').attr('data-pct',val);
//  }
//});
import objectAssign from 'object-assign-deep';

let reducer = function (state = initialState, action) {
  switch (action.type) {
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
      case 'NAME_OF_RESTAURANT_CHANGED':
           return Object.assign({}, state, {
               mainState:Object.assign({},state.mainState,
                      {
                   restaurant:Object.assign({},state.mainState.restaurant,{
                            name:action.val 
               })                     
             })
           });
      case 'REASON_OF_STAYING_CHANGED':
          var res = {mainState:{restaurant:{name:action.val}}};
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
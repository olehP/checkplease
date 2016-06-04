import * as actions from './actions.js';
import fetch from 'isomorphic-fetch';
export function loginUser(creds) {
  let config = {
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `username=${creds.username}&password=${creds.password}`
  }
 actions.requestLogin(creds);
    // We dispatch requestLogin to kickoff the call to the API
      actions.requestLogin(creds);
      console.log(creds)
//      actions.receiveLogin(creds);
      localStorage.setItem('id_token', creds.client_id)
      
    return fetch('http://localhost:3001/sessions/create', config)
      .then(response =>
        response.json().then(user => ({ user, response }))
            ).then(({ user, response }) =>  {
        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          actions.loginError(user.message)
          return Promise.reject(user)
        } else {
          // If login was successful, set the token in local storage
          localStorage.setItem('id_token', user.client_id)
          // Dispatch the success action
         receiveLogin(user)
        }
      }).catch(err => console.log("Error: ",Promise.reject+ err))
  
};
export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('id_token')
    dispatch(receiveLogout())
  } 
}

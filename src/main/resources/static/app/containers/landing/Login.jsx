import React from 'react';
import reactDOM from 'react-dom';
import SignupForm from './Signup.jsx';
import {Link} from 'react-router';




var ForgotPassword = React.createClass({ 
    handleLogin:function(event){
        var t = event.target;
       event.preventDefault();
        const username = this.refs.username;
        const password = this.refs.password;
        const creds = { username: username.value.trim(), 
                       password: password.value.trim(),
                       grant_type : "password",
                       client_id : "5714e206d69e47c30d0041a8_5zdnhlrmf7ggcgwoc44g8kwsgkkwkkcg484ww084ooscs4g0c8",
                       client_secret : "1m2ezwcaz90gcc8kks4wkk4g88ko8k88ksog0g44ks44ccgkg4" };
          let config = {
            method: 'POST',
            headers: { 'Content-Type':'application/x-www-form-urlencoded' },
            body: `username=${creds.username}&password=${creds.password}`
          }
    // We dispatch requestLogin to kickoff the call to the API
        if(creds.username =="max.gladysh@gmail.com"&&creds.password=="1"){
            window.location = 'http://localhost/#/main/settings';
            localStorage.setItem('id_token', creds.client_id);
        }
        else{
            $('.error').remove();
            $("#password").after( "<p class = 'error'>*There is no such user registred</p>" );
        }
//      this.props.actions.receiveLogin(creds);
      localStorage.setItem('id_token', creds.client_id)
      
//    return fetch('http://localhost:3001/sessions/create', config)
//      .then(response =>
//        response.json().then(user => ({ user, response }))
//            ).then(({ user, response }) =>  {
//        if (!response.ok) {
//          // If there was a problem, we want to
//          // dispatch the error condition
//          this.props.actions.loginError(user.message)
//          return Promise.reject(user)
//        } else {
//          // If login was successful, set the token in local storage
//          localStorage.setItem('id_token', user.client_id)
//          // Dispatch the success action
//         receiveLogin(user)
//        }
//      }).catch(err => console.log("Error: ", err))
  
        
        
        
      //        loginUser(creds);  
//        console.log(this.props.onLoginClick(creds));
//        this.props.actions.receiveLogin(creds);
       
       
    },
    render: function() {
        return (
            <div className = "col-md-5 landingForm">
                <img src="img/logo.svg" alt="" className = "logo"/>
                <form  id  = "loginForm" className = "active">
                                    <div className="modal-body">

                                      <input className = "col-md-8 col-md-offset-2" ref = 'username' id = "username" type = "email" placeholder = "Email"/>
                                      <input className = "col-md-8 col-md-offset-2" ref = 'password' id = "password" type = "password" placeholder = "Password"/>

                                      <a href = "#" onClick = {this.forgotPasswordClick} className = "col-md-8 col-md-offset-2">Forgot your password?</a>
                                        <Link to = "main/settings" className = "col-md-offset-2 col-md-8" onClick = {this.handleLogin} id = "loginBut" >LOGIN</Link>
                                    </div>

                                  </form>
                    <SignupForm onLoginShow = {this.props.onLoginShow}/>           
            </div>
       )
    }
});

module.exports = ForgotPassword;
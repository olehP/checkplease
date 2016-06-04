import React from 'react';
import reactDOM from 'react-dom';
var Validation = require('react-validation');
var validator = require('validator');

Validation.extendErrors({
    isRequired: {
        className: 'ui-input_state_empty',
        rule: function(value) {
            return Boolean(validator.trim(value));
        },
    },
    areSamePasswords: {
        className: 'ui-input_state_invalid-user',
        rule: function(value) {
            // Validation provides ref to 'validator' module, so you don't need to install it separately
          
            return validator.trim(value) === $('#signUpPassword').val();
        }
    },
    isValidPassword: {
        className: 'ui-input_state_invalid-user',
        rule: function(value) {
            // Validation provides ref to 'validator' module, so you don't need to install it separately 
            return validator.trim(value).length>6;
        }
    },
});

var Signup = React.createClass({ 
     handleSignup:function(){
        event.preventDefault();
        let email = $('#signUpEmail').val();
        this.props.actions.requestSignup();
        var data = { 
        email:email,
        password:$('#signUpPassword').val(),

      };
        console.log(data);
         this.props.actions.signupSuccess();
         $('#signupForm').animate({marginLeft:"1000px"},300).hide(300);
         $('#signUpSuccess').animate({marginLeft:"0px"},300);
//       $.ajax({
//          type: 'POST',
//          url: 'https://app.herokuapp.com/users',
//          crossDomain: true,
//          dataType: 'json',
//          data: data
//        })
//          .done((data) => {
//           window.location.href = "form";
//           
//          })
//          .fail((jqXhr) => {
//            
//      });
    },
    render: function() {
        return (
            <div className = "signup modal-body" id  = "signup">
                <div id="signUpSuccess">
                    <h1 className = "blueHeading col-md-6 col-md-offset-3 text-left">Thank you!</h1>
                    <p className = "col-md-6 col-md-offset-3 text-left">We've sent a verification code to your email. Simply click on the link in the email, and you'll be all set.</p>
                </div>
                <Validation.Form method = "post" id  = "signupForm">
                                 <div className="modal-body row">
                                        <Validation.Input
                                            blocking='input'
                                            id = "signUpEmail"
                                            className='ui-input col-md-8 col-md-offset-2'
                                            validations={[
                                              {
                                                  rule: 'isEmail'
                                              }
                                            ]}
                                            invalidClassName='wrongField'
                                            name='Email'
                                            type='email'
                                            placeholder = "Email"/>
                                        <Validation.Input
                                            blocking='input'
                                            id = "signUpPassword"
                                            className='col-md-8 col-md-offset-2'
                                            validations = {[
                                                {
                                                    rule:'isRequired'
                                                },
                                                {
                                                    rule:'isValidPassword'
                                                }
                                            ]}
                                            invalidClassName='wrongField'
                                            name='pas1'
                                            type='password'
                                            placeholder = "Password"/>
                                        <Validation.Input
                                            blocking='input'
                                            className='col-md-8 col-md-offset-2'
                                            validations = {[
                                                {
                                                    rule:'isRequired'
                                                },
                                                {
                                                    rule:'areSamePasswords'
                                                }
                                            ]}
                                            invalidClassName='wrongField'
                                            name='pas2'
                                            type='password'
                                            placeholder = "Confirm Password"/>
                                        </div>                                         
                                             <input className = "col-md-offset-2 col-md-8" id = "loginBut" type = "submit" value = "SIGN UP"/>
                    <a className = "col-md-8 col-md-offset-2" href="#" onClick = {this.props.onLoginShow}>&#8592; Back to login page</a>
                                </Validation.Form>
            </div>
       )
    }
});

module.exports = Signup;
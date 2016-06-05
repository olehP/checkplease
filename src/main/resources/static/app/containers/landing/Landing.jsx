import React from 'react';
import reactDOM from 'react-dom';
import './css/style.css';
import {Link} from 'react-router';
import LoginForm from './Login.jsx'


//<p className = "col-md-8">Don`t make your customers wait for a waiter. Provide them with your menu and introduce the waiter for them in their favorite messenger.</p>


var Landing = React.createClass({
    onClick :function(e){
        var elem = e.target;
        if($(elem).hasClass('openedInfo')){
              $(elem).removeClass('openedInfo');
              $(elem).siblings('p').remove();
          }
        else{
          elem.classList.add('openedInfo');
          var clicked = e.target.getAttribute('id');
          var string;
            clicked = clicked.toString();
            console.log(clicked);
            switch(clicked){
                case 'shareButtonInfo': string =  "Collaboration allows multiple users to edit one form";break;
                case 'infoButtonInfo': string =  "Step-by-step guidance and advice";break;
                case 'savedInfoButtonInfo': string =  "Information automatically saves to your account";break;
                case 'navButtonInfo': string =  "Same exact Form N-400 that USCIS requires";break;
                case 'inputButtonInfo': string =  "Smart form logic tailored to each applicant's situation";break;
                    default: string = "Ops";break;
            }
            var infoBox = document.createElement('p');
            infoBox.innerHTML = string;
            e.target.parentElement.appendChild(infoBox);
        }
    },
    hidePopup:function(e){
         $("#modal").slideUp();  
     },
    toggleLoginSignup:function(e){
        var currentAttrValue = $(e.target).attr('href');
        $('.tabs ' + currentAttrValue).show().siblings().hide();
        $(e.target).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    },
    openContactForm:function(e){
        e.preventDefault();
        $(".supportBlock").fadeOut(100);
        $("#contactForm").fadeIn(500);
    },
    showSignup:function(e){
      e.preventDefault();
        $('#loginForm').hide(300);
      $('#signup').show(300);
    },
    onLoginShow:function(e){
        e.preventDefault();
        $('#signup').hide(300);
        $('#loginForm').show(300);
    },
    componentDidMount:function(){
        var i = 1;
        var mas = ["CHECK, PLEASE!","Don`t make your customers wait", "Provide them with your menu", "In their favorite messenger."]
        var timerId = setInterval(function() {
            $('#landingHeading').html(mas[i]);
            i++;
            if(i>4)i=0;
        }, 2000);

        // через 5 сек остановить повторы
        setTimeout(function() {
            clearInterval(timerId);
        }, 20000);
    },
    render: function() {

        return (
            <div className = "landing row">
                
                 <div className="col-md-7 info">
                     <h1 id = "landingHeading">CHECK, PLEASE!</h1>                     
                     <a href="#" className = "approveBut" id = "regBut" onClick = {this.showSignup}>Register now!</a>
                     <img className = "iphone" src="img/iphone6.png" alt=""/>
                 </div>
                <LoginForm onLoginShow = {this.onLoginShow}/>        
                 
            </div>
            
       )
    }
});

module.exports = Landing;

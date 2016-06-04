import React from 'react';
import reactDOM from 'react-dom';
import {Link} from 'react-router';


//<p className = "col-md-8">Don`t make your customers wait for a waiter. Provide them with your menu and introduce the waiter for them in their favorite messenger.</p>


var Settings = React.createClass({

    render: function() {

        return (
            <div className = "col-md-8 settings">
                <h1 className = "text-center">Settings</h1>
                <form action="">
                    <input className = "col-md-8 col-md-offset-2" type="text" id = "nameOfRestaurant" placeholder = "Name of the Restaurant"/>
                    <input className = "col-md-8 col-md-offset-2" type="text" id = "adress" placeholder = "Adress" />
                    <input className = "col-md-8 col-md-offset-2" type="text" id = "tables" placeholder = "Amount of Tables"/>
                    <textarea className = "col-md-8 col-md-offset-2" name="description" placeholder = "Short description of your restaurant" id="description" cols="30" rows="10"></textarea>
                    <input className = "col-md-8 col-md-offset-2 submitBut" type="sumbit" id = "submit" value = "Save"/>
                </form>
            </div>

        )
    }
});

module.exports = Settings;

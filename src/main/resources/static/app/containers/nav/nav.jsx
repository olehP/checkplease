import React from 'react';
import reactDOM from 'react-dom';
import {Link} from 'react-router';


//<p className = "col-md-8">Don`t make your customers wait for a waiter. Provide them with your menu and introduce the waiter for them in their favorite messenger.</p>


var Nav = React.createClass({

    render: function() {

        return (
            <div className = {this.props.className + " nav"} >
                <img src="img/logoGreen.svg" className = "logo" alt=""/>
                <p className="checkPlease col-md-12 text-center"><span>CHECK, PLEASE!</span></p>
                <Link to = "main/menu">Menu</Link>
                <Link to = "main/waiters">Waiters</Link>
                <Link to = "main/tables">Tables</Link>
                <Link to = "main/settings">Settings</Link>
            </div>

        )
    }
});

module.exports = Nav;

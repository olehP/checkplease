import React from 'react';
import reactDOM from 'react-dom';
import Nav from '../nav/nav.jsx';
import {Link} from 'react-router';


//<p className = "col-md-8">Don`t make your customers wait for a waiter. Provide them with your menu and introduce the waiter for them in their favorite messenger.</p>


var MainComponent = React.createClass({
    render: function() {

        return (
            <div className = "main row">
                <div id = "saveBlock">Saved!</div>
               <Nav className = "col-md-3"/>
                {this.props.children&&React.cloneElement(this.props.children, {
                    actions:this.props.actions,
                    asyncActions:this.props.asyncActions,
                    path: this.props.location,
                    isAuthenticated:this.props.isAuthenticated,
                    mainState:this.props.mainState
                })}
            </div>

        )
    }
});

module.exports = MainComponent;

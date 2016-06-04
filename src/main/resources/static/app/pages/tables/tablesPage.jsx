import React from 'react';
import reactDOM from 'react-dom';
import {Link} from 'react-router';


//<p className = "col-md-8">Don`t make your customers wait for a waiter. Provide them with your menu and introduce the waiter for them in their favorite messenger.</p>


var Settings = React.createClass({
    render: function() {

        return (
            <div className = "col-md-8 tables">
                    <div>
                        <h1 className = "text-center greenHeading">Tables</h1>
                        <ul className = "waitersList">
                            <li className = "col-md-4">
                                <span className = "tableNumber">№1</span>
                                <span>Max Gladysh</span>
                                <button className="deleteWaiter">x</button>

                            </li>
                            <li className = "col-md-4">
                                <img src = "img/logo1.svg" alt="" className = "waiterPhoto"/>
                                <span>Max Gladysh</span>
                                <button className="deleteWaiter">x</button>
                            </li>
                            <li className = "col-md-4">
                                <img src = "img/logo1.svg" alt="" className = "waiterPhoto"/>
                                <span>Max Gladysh</span>
                                <button className="deleteWaiter">x</button>
                            </li>
                            <li className = "col-md-4">
                                <img src = "img/logo1.svg" alt="" className = "waiterPhoto"/>
                                <span>Max Gladysh</span>
                                <button className="deleteWaiter">x</button>
                            </li>
                            <li className = "col-md-4">
                                <img src = "img/logo1.svg" alt="" className = "waiterPhoto"/>
                                <span>Max Gladysh</span>
                                <button className="deleteWaiter">x</button>
                            </li>
                        </ul>
                    </div>
            </div>

        )
    }
});

module.exports = Settings;

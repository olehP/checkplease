import React from 'react';
import reactDOM from 'react-dom';
import {Link} from 'react-router';
import {callApi} from '../../../middleware/api.js';

//<p className = "col-md-8">Don`t make your customers wait for a waiter. Provide them with your menu and introduce the waiter for them in their favorite messenger.</p>


var Settings = React.createClass({
    render: function() {

        return (
            <div className = "col-md-8 waiters" onClick = {callApi('waiter?restaurant_id=1',true)}>
            
                {!this.props.mainState.waiters&&
                    <div className = "noWaiters">
                        <img src="img/logo1.svg" className = "logo" alt=""/>
                        <p className = "text-center">Oooops. It seems like you have no waiters ;(</p>
                        <h3 className = "text-center">To add Waiters just give them this number <span className = "restaurantCode">{this.props.mainState.restaurantCode}</span></h3>
                    </div>
                }
                {this.props.mainState.waiterRequests&&
                  <div>
                    <h1 className = "text-center greenHeading">Waiter`s Requests</h1>
                    <ul className = "waitersList">
                        <li>
                            <img src = "img/logo1.svg" className = "waiterPhoto"  alt=""/>
                            <span>Max Gladysh</span>
                            <button className="deleteWaiter">x</button>

                        </li>
                        <li>
                            <img src = "img/logo1.svg" alt="" className = "waiterPhoto"/>
                            <span>Max Gladysh</span>
                            <button className="deleteWaiter">x</button>
                        </li>
                        <li>
                            <img src = "img/logo1.svg" alt="" className = "waiterPhoto"/>
                            <span>Max Gladysh</span>
                            <button className="deleteWaiter">x</button>
                        </li>
                        <li>
                            <img src = "img/logo1.svg" alt="" className = "waiterPhoto"/>
                            <span>Max Gladysh</span>
                            <button className="deleteWaiter">x</button>
                        </li>
                        <li>
                            <img src = "img/logo1.svg" alt="" className = "waiterPhoto"/>
                            <span>Max Gladysh</span>
                            <button className="deleteWaiter">x</button>
                        </li>
                    </ul>
                  </div>
                }
                {this.props.mainState.waiters&&
                    <div>
                        <h1 className = "text-center greenHeading">Waiters</h1>
                        <ul className = "waitersList">
                            <li>
                                <img src = "img/logo1.svg" className = "waiterPhoto"  alt=""/>
                                <span>Max Gladysh</span>
                                <button className="deleteWaiter">x</button>
                                
                            </li>
                            <li>
                                <img src = "img/logo1.svg" alt="" className = "waiterPhoto"/>
                                <span>Max Gladysh</span>
                                <button className="deleteWaiter">x</button>
                            </li>
                            <li>
                                <img src = "img/logo1.svg" alt="" className = "waiterPhoto"/>
                                <span>Max Gladysh</span>
                                <button className="deleteWaiter">x</button>
                            </li>
                            <li>
                                <img src = "img/logo1.svg" alt="" className = "waiterPhoto"/>
                                <span>Max Gladysh</span>
                                <button className="deleteWaiter">x</button>
                            </li>
                            <li>
                                <img src = "img/logo1.svg" alt="" className = "waiterPhoto"/>
                                <span>Max Gladysh</span>
                                <button className="deleteWaiter">x</button>
                            </li>
                        </ul>
                    </div>}
            </div>

        )
    }
});

module.exports = Settings;

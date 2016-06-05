import React from 'react';
import reactDOM from 'react-dom';
import {Link} from 'react-router';
import {callApi} from '../../../middleware/api.js';

//<p className = "col-md-8">Don`t make your customers wait for a waiter. Provide them with your menu and introduce the waiter for them in their favorite messenger.</p>


var Settings = React.createClass({
    onRowDelete:function(waiter){
      this.props.actions.deleteWaiter(waiter.id)
    },
    render: function() {
        var waiters = this.props.mainState.waiters.map(function(waiter) {
            return (
                    <li>
                        <img src = {waiter.img} className = "waiterPhoto"  alt=""/>
                        <span>{waiter.firstName+" "+waiter.lastName}</span>
                        <img style = {{width:'20px',float:'right',margin:'16px 10px',marginRight:'30px', cursor:"pointer"}} src="img/delete.svg" alt=""/>
                    <img style = {{width:'20px',float:'right',margin:'16px 10px',cursor:"pointer"}} src="img/edit.svg" alt=""/>
                        
                    </li>
            );
        });
        return (
            <div className = "col-md-8 waiters">
            
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
                            <img src="img/edit.svg" alt=""/><img src="img/delete.svg" alt=""/>

                        </li>
                        <li>
                            <img src = "img/logo1.svg" alt="" className = "waiterPhoto"/>
                            <span>Max Gladysh</span>
                            <img src="img/edit.svg" alt=""/><img src="img/delete.svg" alt=""/>
                        </li>
                        <li>
                            <img src = "img/logo1.svg" alt="" className = "waiterPhoto"/>
                            <span>Max Gladysh</span>
                            <img src="img/edit.svg" alt=""/><img src="img/delete.svg" alt=""/>
                        </li>
                        <li>
                            <img src = "img/logo1.svg" alt="" className = "waiterPhoto"/>
                            <span>Max Gladysh</span>
                            <img src="img/edit.svg" alt=""/><img src="img/delete.svg" alt=""/>
                        </li>
                        <li>
                            <img src = "img/logo1.svg" alt="" className = "waiterPhoto"/>
                            <span>Max Gladysh</span>
                            <img src="img/edit.svg" alt=""/><img src="img/delete.svg" alt=""/>
                        </li>
                    </ul>
                  </div>
                }
                {this.props.mainState.waiters&&
                   
                    <div>
                       
                        <h1 className = "text-center greenHeading">Waiters</h1>
                        <ul className = "waitersList">
                            {waiters}
                        </ul>
                    </div>}
            </div>

        )
    }
});

module.exports = Settings;

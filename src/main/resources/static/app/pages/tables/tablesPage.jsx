import React from 'react';
import reactDOM from 'react-dom';
import {Link} from 'react-router';
import Select from 'react-select';

//<p className = "col-md-8">Don`t make your customers wait for a waiter. Provide them with your menu and introduce the waiter for them in their favorite messenger.</p>
//manager bot

var Settings = React.createClass({
    
    render: function() {
        var waiters = this.props.mainState.waiters;
        var waitersData = [];
        for(var i = 0;i<waiters.length;i++){
            let name = waiters[i].firstName + " "+ waiters[i].lastName, id = waiters[i].id;
            let obj = { value: id, label: name };
            waitersData.push(obj);
        };
        var tables = this.props.mainState.tables.map(function(table) {
            return (
                <li key={table.id} className = "col-md-4">
                    <div className="col-md-12 active table">
                        <p className = "tableNumber text-center">№{table.id}</p>
                        <p className = "tableCode text-center">{table.tableNumber}</p>
                        <Select  className = "col-md-10 col-md-offset-1" options = {waitersData} placeholder = "Select Waiter"/>
                    </div>
                </li>
            );
        });
        return (
            <div className = "col-md-8 tables">
                    <div>
                        <h1 className = "text-center greenHeading">Tables</h1>
                        {this.props.mainState.tables.length<1&&
                            <div style = {{marginTop:'-80px'}} className = "noWaiters">
                                <img src="img/logo1.svg" className = "logo" alt=""/>
                                <p className = "text-center">Oooops. It seems like you have no tables ;(</p>
                                <h3 className = "text-center">To add Tables just go to settings and fill "Number of tables" field <span className = "restaurantCode">{this.props.mainState.restaurantCode}</span></h3>
                            </div>
                        }
                        <ul className = "tablesList">
                           {this.props.mainState.tables.length>1&&tables}
                        </ul>
                    </div>
            </div>

        )
    }
});

module.exports = Settings;

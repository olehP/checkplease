import React from 'react';
import reactDOM from 'react-dom';
import {Link} from 'react-router';
import Select from 'react-select';

//<p className = "col-md-8">Don`t make your customers wait for a waiter. Provide them with your menu and introduce the waiter for them in their favorite messenger.</p>


var Settings = React.createClass({
    
    render: function() {
        var tables = this.props.mainState.tables.map(function(table) {
            return (
                <li key={table.id} className = "col-md-4">
                    <div className="col-md-12 active table">
                        <p className = "tableNumber text-center">№1 {table.id}</p>
                        <p className = "tableCode text-center">{table.code}</p>
                        <Select className = "col-md-10 col-md-offset-1" placeholder = "Select Waiter"/>
                    </div>
                </li>
            );
        });
        return (
            <div className = "col-md-8 tables">
                    <div>
                        <h1 className = "text-center greenHeading">Tables</h1>
                        <ul className = "tablesList">
                           {tables}
                        </ul>
                    </div>
            </div>

        )
    }
});

module.exports = Settings;

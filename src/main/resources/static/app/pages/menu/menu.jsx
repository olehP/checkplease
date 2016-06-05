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
        var burgers = this.props.mainState.menu.burgers.map(function(item) {
            return (
                <li key={item.id} className = "col-md-4">
                    <div className="col-md-12 active table">
                        <img style = {{width:"100%", marginTop:"-10px"}}src = {item.img}/>
                        <h4 className = "col-md-12">{item.name}</h4>
                        <p className = "col-md-12">{item.weight}</p>
                        <p className = "col-md-12">{item.description}</p>
                        <p className = "col-md-8 price">{item.price + " UAH"}</p>
                        <button className = "col-md-1"><img src="img/edit.svg" alt=""/></button>
                        <button className = "col-md-1"><img src="img/delete.svg" alt=""/></button>
                    </div>
                </li>
            );
        });
        var drinks = this.props.mainState.menu.drinks.map(function(item) {
            return (
                <li key={item.id} className = "col-md-4">
                    <div className="col-md-12 active table">
                        <img style = {{width:"100%", marginTop:"-10px"}}src = {item.img}/>
                        <h4 className = "col-md-12">{item.name}</h4>
                        <p className = "col-md-12">{item.weight}</p>
                        <p className = "col-md-12">{item.description}</p>
                        <p className = "col-md-8 price">{item.price + " UAH"}</p>
                        <button className = "col-md-1"><img src="img/edit.svg" alt=""/></button>
                        <button className = "col-md-1"><img src="img/delete.svg" alt=""/></button>
                    </div>
                </li>
            );
        });
        return (
            <div className = "col-md-8 menu">
                <div>
                    <h1 className = "text-center greenHeading">Menu</h1>
                    <ul className = "tablesList">
                        <h3 className = "col-md-12">Burgers</h3>
                        {burgers}
                    </ul>
                    <ul className = "tablesList">
                       <h3 className = "col-md-12">Drinks</h3>
                        {drinks}
                    </ul>
                </div>
            </div>

        )
    }
});

module.exports = Settings;

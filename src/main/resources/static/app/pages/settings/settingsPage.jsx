import React from 'react';
import reactDOM from 'react-dom';
import {Link} from 'react-router';
import TextInput from '../../components/textInput.jsx';
import Geosuggest from 'react-geosuggest';

//<p className = "col-md-8">Don`t make your customers wait for a waiter. Provide them with your menu and introduce the waiter for them in their favorite messenger.</p>


var Settings = React.createClass({
    
    sumbitForm:function(e){
        e.preventDefault();
        const name = this.refs.nameOfRestaurant;
        const adress = $('#adress').val();
        const numberOfTables = this.refs.numberOfTables;
        const description = this.refs.description;
        const settings = { name: name.value.trim(), 
                           adress: adress,
                          numberOfTables: numberOfTables.value.trim(),
                          description: description.value.trim(),
                      };
         
        this.props.actions.settingsChanged(settings);
       


    },
    render: function() {

        return (
            <div className = "col-md-8 settings">
                <h1 className = "text-center">Settings</h1>
                <form action="">
                    <input ref = "nameOfRestaurant"  defaultValue = {this.props.mainState.restaurant.name} className = "col-md-8 col-md-offset-2" type="text" id = "nameOfRestaurant" placeholder = "Name of the Restaurant"/>
                    <input ref = "numberOfTables" defaultValue = {this.props.mainState.restaurant.numberOfTables} onChangeAction = {this.props.actions.numberOfTablesChanged} className = "col-md-8 col-md-offset-2" type="text" id = "tables" placeholder = "Amount of Tables"/>
            <Geosuggest ref = "adressOfRestaurant" initialValue = {this.props.mainState.restaurant.adress} onChangeAction = {this.props.actions.restaurantAdressChanged} inputClassName = "col-md-8 col-md-offset-2" type="text" id = "adress" placeholder = "Adress" />
                    <textarea ref = "description" defaultValue = {this.props.mainState.restaurant.description} onChange = {this.props.actions.restaurantDescriptionChanged} className = "col-md-8 col-md-offset-2" name="description" placeholder = "Short description of your restaurant" id="description" cols="30" rows="10"></textarea>
                    <input className = "col-md-8 col-md-offset-2 submitBut" onClick = {this.sumbitForm} name = "sumibt" type="sumbit" id = "submit" value = "Save"/>
                </form>
            </div>

        )
    }
});

module.exports = Settings;

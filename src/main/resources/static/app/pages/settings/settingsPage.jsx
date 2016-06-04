import React from 'react';
import reactDOM from 'react-dom';
import {Link} from 'react-router';
import TextInput from '../../components/textInput.jsx'

//<p className = "col-md-8">Don`t make your customers wait for a waiter. Provide them with your menu and introduce the waiter for them in their favorite messenger.</p>


var Settings = React.createClass({
    componentDidMount:function(){
        console.log(this.props.actions);
    },
    render: function() {

        return (
            <div className = "col-md-8 settings">
                <h1 className = "text-center">Settings</h1>
                <form action="">
                    <TextInput value = {this.props.mainState.restaurant.name} onChangeAction = {this.props.actions.nameOfRestaurantChanged} className = "col-md-8 col-md-offset-2" type="text" id = "nameOfRestaurant" placeholder = "Name of the Restaurant"/>
                    <TextInput value = {this.props.mainState.restaurant.adress} onChangeAction = {this.props.actions.restaurantAdressChanged} className = "col-md-8 col-md-offset-2" type="text" id = "adress" placeholder = "Adress" />
                    <TextInput value = {this.props.mainState.restaurant.numberOfTables} onChangeAction = {this.props.actions.numberOfTablesChanged} className = "col-md-8 col-md-offset-2" type="text" id = "tables" placeholder = "Amount of Tables"/>
                    <textarea defaultValue = {this.props.mainState.restaurant.description} onChange = {this.props.actions.restaurantDescriptionChanged} className = "col-md-8 col-md-offset-2" name="description" placeholder = "Short description of your restaurant" id="description" cols="30" rows="10"></textarea>
                    <input className = "col-md-8 col-md-offset-2 submitBut" type="sumbit" id = "submit" defaultValue = "Save"/>
                </form>
            </div>

        )
    }
});

module.exports = Settings;

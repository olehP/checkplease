import React from 'react';
import reactDOM from 'react-dom';



var MainFormComponent = React.createClass({
    handleChange: function(evt) {
        this.setState({
          value: evt.target.value,
          checked: evt.target.checked
        });
       if(this.props.type=="checkbox")this.props.onChangeAction(evt.target.checked)
       else this.props.onChangeAction(evt.target.value);
    },
    render: function() {
        return (
            <input defaultChecked = {this.props.checked} type = {this.props.type}  className = {this.props.className} defaultValue = {this.props.value} onChangeAction = {this.props.onChangeAction} onBlur = {this.handleChange} id = {this.props.id} onMouseEnter = {this.props.onMouseEnter} placeholder = {this.props.placeholder}/>
            
       )
    }
});

module.exports = MainFormComponent
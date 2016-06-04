import React from 'react';
import {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import * as actions from "../../redux/actions/actions.js";
import * as asyncActions from "../../redux/actions/asyncActions.js";
import { loginUser, logoutUser } from '../../redux/actions/asyncActions.js'
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'
    
        var App = React.createClass({
            render() {
            let path = this.props.path;
            return (
                <div className = "container-fluid">
                
                {this.props.children && React.cloneElement(this.props.children, {
                        actions:this.props.actions,
                        asyncActions:this.props.asyncActions,
                        path: this.props.location,
                        isAuthenticated:this.props.isAuthenticated,
                        onLoginClick:loginUser,
                        mainState:this.props.mainState
                })}
                </div>

            );
          }
});
App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
}
var mapStateToProps = function(state){
    return state;  
};
var mapDispatchToProps = function(dispatch){
    return {
        actions: bindActionCreators(actions,dispatch,asyncActions)
    }
};
module.exports = connect(mapStateToProps,mapDispatchToProps)(App);
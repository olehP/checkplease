'use strict';
import React,{Component, PropTypes}  from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory, Route, Link,IndexRoute} from 'react-router';
import configureStore from './redux/stores/store.js';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import {authorisatinStatus} from  './containers/App/component.jsx';
import App from './containers/App/component.jsx';
import './src/css/style.css';
import './src/css/react-select.min.css';
import Landing from './containers/landing/Landing.jsx';
import Main from './containers/MainComponent/MainComponent.jsx';
import Settings from './pages/settings/settingsPage.jsx';
import Waiters from './pages/waiters/waiters.jsx';
import Tables from './pages/tables/tablesPage.jsx';

var formSteps = ['Eligibility','Personal','Personal/Citizenship','Personal/Other',"Disablilities",'Contact','Residence','Parents','BiographicInformation','EmploymentAndSchools','TimeOutsideTheUnitedStates','MaritalHistory','MaritalHistory/Spouse','MaritalHistory/Previous','MaritalHistory/YourPrevious','Children','Additional','Preparers'];
let formStepsNames = ['Eligibility','Personal','Citizenship','Other','Disabilities and/or Impairments','Contact','Residence','Parents','Biographic Information','Employment And Schools','Time Outside The United States','Marital History','Spouse','Previous','YourPrevious','Children','Additional','Preparers']
var initialState = {
    //userAuthentification
    user:null,
    isFetching: false,
    isAuthenticated: false,
    id_token: null,
    errorMessage:"",
    completedSteps:1,
    formSteps:formSteps,
    activeFormStep:0,
    mainState:{
        waiters:[],
        restaurantCode:"ff3014UA",
        numberOfTables:0
    }
    
};

var store = configureStore(initialState);
var routes = <Route name="Main" path="/" component={App} history={hashHistory}>
                <IndexRoute name = "index"  component = {Landing}/>
                <Route name = "main" path = "main" component = {Main}>
                    <Route name = "welcome" path = "settings" component = {Settings}/>
                    <Route name = "welcome" path = "waiters" component = {Waiters}/>
                    <Route name = "welcome" path = "tables" component = {Tables}/>
                </Route>
                
            </Route>

function main() {
    ReactDOM.render(<Provider store = {store}>
                      <Router routes={routes} history = {hashHistory} />
                </Provider>, 
            document.getElementById('app'));
}
main();
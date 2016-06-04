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


var initialState = {
    //userAuthentification
    user:null,
    isFetching: false,
    isAuthenticated: false,
    id_token: null,
    errorMessage:"",
    mainState:{
        restaurant:{
            id:null,
            name:"Celentano",
            description:"",
            code:"",
            password:"",
            numberOfTables:0
        },
        waiters:[{
            id: 0,
            firstName: 'Max',
            lastName:'Gladysh',
            chatId:null,
            atWork:true,    
        },{
            id: 1,
            firstName: 'Nazar',
            lastName:'Hembara',
            chatId:null,
            atWork:true,    
        },],
        tables:[{
            id:"",
            number:"",
            restaurant:"",
            waiter:{},
        }]
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
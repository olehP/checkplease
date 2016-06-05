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
import Menu from './pages/menu/menu.jsx';


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
            numberOfTables:0,
            adress:""
        },
        waiters:[{
            id: 0,
            img:'img/ihor.jpg',
            firstName: 'Ihor',
            lastName:'Kononuchenko',
            chatId:null,
            atWork:true,    
        },{
            id: 1,
            img:'img/nazar.jpg',
            firstName: 'Nazar',
            lastName:'Hembara',
            chatId:null,
            atWork:true,    
        },{
            id: 3,
            img:'img/yulia.jpg',
            firstName: 'Yulia',
            lastName:'Hrycyshyn',
            chatId:null,
            atWork:true,    
        },],
        tables:[],
//        categories:'burgers', 'salads','appetizers&sides', 'desserts', 'drinks'
        menu:{
          burgers:[
            {id:1,
             img:'img/burger.jpg',
             name:'Classic Burger with Cheese',
             wight:"460",
             description:'Tomato, Pickles, Onion, Cheddar Cheese, Salat, French Fries, Meat Petty',
             price:"80",            
            },            {id:2,
            img:'https://lviv.eda.ua/images/77154-220-184-classic_cheese_.jpg',
             name:'Classic Burger with Cheese',
             wight:"460",
             description:'Tomato, Pickles, Onion, Cheddar Cheese, Salat, French Fries, Meat Petty',
             price:"80",            
            },            {id:3,
            img:'https://lviv.eda.ua/images/77220-220-184-chicken_honey.jpg',
             name:'Classic Burger with Cheese',
             wight:"460",
             description:'Tomato, Pickles, Onion, Cheddar Cheese, Salat, French Fries, Meat Petty',
             price:"80",            
            },            {id:4,
                           img:'https://lviv.eda.ua/images/77217-220-184-sugunyi.jpg',
             name:'Classic Burger with Cheese',
             wight:"460",
             description:'Tomato, Pickles, Onion, Cheddar Cheese, Salat, French Fries, Meat Petty',
             price:"80",            
            },            {id:5,
                           img:'https://lviv.eda.ua/images/77170-220-184-mex.jpg',
             name:'Classic Burger with Cheese',
             wight:"460",
             description:'Tomato, Pickles, Onion, Cheddar Cheese, Salat, French Fries, Meat Petty',
             price:"80",            
            },            {id:6,
                           img:'https://lviv.eda.ua/images/77225-220-184-kidsburger.jpg',
             name:'Classic Burger with Cheese',
             wight:"460",
             description:'Tomato, Pickles, Onion, Cheddar Cheese, Salat, French Fries, Meat Petty',
             price:"80",            
            }
           ],
        drinks:[
            {
            id: 1
                , img: 'https://lviv.eda.ua/images/77378-220-184-pepsi.jpg'
            , name: 'Classic Burger with Cheese'
            , wight: "460"
            , description: 'Tomato, Pickles, Onion, Cheddar Cheese, Salat, French Fries, Meat Petty'
            , price: "80"
        , }, {
            id: 2
            , img: 'https://lviv.eda.ua/images/77386-220-184-7up.jpeg'
            , name: 'Classic Burger with Cheese'
            , wight: "460"
            , description: 'Tomato, Pickles, Onion, Cheddar Cheese, Salat, French Fries, Meat Petty'
            , price: "80"
        , }, {
            id: 3
            , img: 'https://lviv.eda.ua/images/77391-220-184-red_bull.jpg'
            , name: 'Classic Burger with Cheese'
            , wight: "460"
            , description: 'Tomato, Pickles, Onion, Cheddar Cheese, Salat, French Fries, Meat Petty'
            , price: "80"
        , }, {
            id: 4
            , img: 'https://lviv.eda.ua/images/77422-220-184-sok_sandora.jpg'
            , name: 'Classic Burger with Cheese'
            , wight: "460"
            , description: 'Tomato, Pickles, Onion, Cheddar Cheese, Salat, French Fries, Meat Petty'
            , price: "80"
        , }, {
            id: 5
            , img: 'https://lviv.eda.ua/images/115063-220-184-a1869c24_e684_49e2_82d9_c83ce4418029.jpg'
            , name: 'Classic Burger with Cheese'
            , wight: "460"
            , description: 'Tomato, Pickles, Onion, Cheddar Cheese, Salat, French Fries, Meat Petty'
            , price: "80"
        , }, {
            id: 6
            , img: 'https://lviv.eda.ua/images/77394-220-184-akva_minerale.jpg'
            , name: 'Classic Burger with Cheese'
            , wight: "460"
            , description: 'Tomato, Pickles, Onion, Cheddar Cheese, Salat, French Fries, Meat Petty'
            , price: "80"
        , }
                
                ]
            }
    }
    };

var store = configureStore(initialState);
var routes = <Route name="Main" path="/" component={App} history={hashHistory}>
                <IndexRoute name = "index"  component = {Landing}/>
                <Route name = "main" path = "main" component = {Main}>
                    <Route name = "welcome" path = "settings" component = {Settings}/>
                    <Route name = "welcome" path = "waiters" component = {Waiters}/>
                    <Route name = "welcome" path = "tables" component = {Tables}/>
                    <Route name = "welcome" path = "menu" component = {Menu}/>
                </Route>
                
            </Route>

function main() {
    ReactDOM.render(<Provider store = {store}>
                      <Router routes={routes} history = {hashHistory} />
                </Provider>, 
            document.getElementById('app'));
}
main();
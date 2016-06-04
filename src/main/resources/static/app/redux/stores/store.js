import {applyMiddleware, compose, createStore} from 'redux';
import reducer from '../reducers/reducers.js';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import api from './../../../middleware/api.js';


var finalCreateStore = compose(
    applyMiddleware(thunkMiddleware,logger(),api))(createStore);

var configureStore = function(initialState){
    return finalCreateStore(reducer,initialState)                          
};

module.exports = configureStore;
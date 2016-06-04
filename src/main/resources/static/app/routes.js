import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router'
import ReactPage from './containers/component/component.jsx';

let routes =  (<Router history={hashHistory}>
    <Route path="?_k=ofannn" component={ReactPage}/>
  </Router>)
    
module.exports = routes;
               
//                                   <ProductGroupsPage
//                        iteamsTableShowing = {this.props.iteamsTableShowing}
//                        maxRows = {this.props.maxRows}
//                        fakeDataTable = {this.props.fakeDataTable}
//                        chainsState = {this.props.chainsState}
//                        statesState = {this.props.statesState}
//                        minPrice={this.props.minPrice}
//                        maxPrice = {this.props.maxPrice}
//                        priceValues = {this.props.priceValues}
//                        locations = {this.props.locations}
//                        actions = {this.props.actions}
//                        chains = {this.props.chains}
//                        avaragePrice = {this.props.avaragePrice}
//                        lowPrice = {this.props.lowPrice}
//                        highPrice = {this.props.highPrice}
//                    />
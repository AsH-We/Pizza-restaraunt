import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MainPage, CartPage, ItemPage } from '../pages';
import AppHeader from '../app-header';	
import { connect } from 'react-redux';


import Background from './food-bg.jpg';

const App = (props) => {
    return (
		<div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
			<AppHeader total={props.totalPrice} />
			<Switch>
				<Route exact path="/" component={MainPage} />
				<Route path="/cart" component={CartPage} />
				<Route path="/:id" component={ItemPage} />

				<Redirect to="/" />
			</Switch>
		</div> 
    )
}

const mapStateToProps = ({ totalPrice }) => {
	return {
		totalPrice: totalPrice
	}
};

export default connect(mapStateToProps, {})(App);
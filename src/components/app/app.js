import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';

import Background from './food-bg.jpg';

const App = () => {
    return (
		<div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
			<AppHeader total={50} />
			<Switch>
				<Route exact path="/" component={MainPage} />
				<Route path="/cart" component={CartPage} />
				<Redirect to="/" />
			</Switch>
		</div> 
    )
}

export default App;
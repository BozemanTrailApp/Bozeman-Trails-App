var React = require('react');
var ReactDom = require('react-dom');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

// import {Router, Route, hashHistory, IndexRoute } from 'react-router'; 
// this is a Method on React router "Above"



var Main = require('./../main');
var Profile = require('./../profile');
var Trails = require('./../trails');
var CreateAccount = require('./../login/createAccountData');


ReactDom.render(
	(<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Trails}/>
			<Route path='/createAccount' component={CreateAccount}/>
			<Route path='/profile' component={Profile}/>
			
		</Route>
	</Router>)
	, 
	document.getElementById('app')
);
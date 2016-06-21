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
var About = require('./../about');
var Home = require('./../home');


ReactDom.render(
	(<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home}/>
			
			<Route path='/about' component={About}/>
			
		</Route>
	</Router>)
	, 
	document.getElementById('app')
);
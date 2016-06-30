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
// var TrailsApp = require('./../trailsApp');
var Home = require('./../home');
var Login = require('./../login');
// var UserLog = require('./../userLog');
// var Sourdough = require('./../trailPage/sourdough');
// var Leverich = require('./../trailPage/leverich');
// var MainToPeets = require('./../trailPage/mainToPeets');
// var Gallagator = require('./../trailPage/gallagator');
// var Sypes = require('./../trailPage/sypes');
// var THEm = require('./../trailPage/theM');


ReactDom.render(
	(<Router history={hashHistory}>
		
		<Route path='/' component = {Main}>
			<IndexRoute component = {Home}/>
			<Route path ='/profile' component = {Profile}/>
			<Route path = '/home' component = {Home}/>
	

			
			<Route path = '/login' component = {Login}/>

			
		</Route>
	</Router>)
	, 
	document.getElementById('app')
);
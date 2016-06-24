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
var Home = require('./../home');
var Sourdough = require('./../trailPage/sourdough');
var Leverich = require('./../trailPage/leverich')

ReactDom.render(
	(<Router history={hashHistory}>
		<Route path='/' component = {Main}>
			<IndexRoute component = {Home}/>
			<Route path ='/profile' component = {Profile}/>
			<Route path = '/home' component = {Home}/>
			<Route path = '/trails' component = {Trails}/>
			<Route path = './trailPage/sourdough' component = {Sourdough}/>
			<Route path = './trailPage/leverich' component = {Leverich}/>
		</Route>
	</Router>)
	, 
	document.getElementById('app')
);
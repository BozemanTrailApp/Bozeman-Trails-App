//Change


var React = require('react');
var ReactDom = require('react-dom');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;





var Main = require('./../main');
var Profile = require('./../profile'); 
var TrailsApp = require('./../trailsApp');
var Home = require('./../home');
var Login = require('./../login');



ReactDom.render(
	(<Router history={hashHistory}>
		
		<Route path='/' component = {Main}>
			<IndexRoute component = {Home}/>
				<Route path ='/profile' component = {Profile}/>
				<Route path = '/home' component = {Home}/>
				<Route path = '/trails' component = {TrailsApp}/>
				<Route path = '/login' component = {Login}/>

			
		</Route>
	</Router>)
	, 
	document.getElementById('app')
);
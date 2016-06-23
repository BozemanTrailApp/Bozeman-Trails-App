var React = require('react');
var Link = require('react-router').Link;
var LoginApp = require('./loginApp.js');

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<Link to='/profile'>
						<button className="btn btn-info btn-xs mainbuttontwo">Profile</button>
					</Link>

					<div className="container-fluid jumbotron">
					<div className="titleBox">
					<h1 className="theTitle"> Bozeman.by.trail </h1>
					</div>
					<div className="loginBox">
							<LoginApp />
					</div>
						
					
					<Link to='/'> 
						<button className="btn btn-info btn-lg btn-block mainbuttonone">T R A I L S</button>
					</Link>

				
					  {this.props.children}
				</div>	
			</div>
			)
	}
});

module.exports = Main;



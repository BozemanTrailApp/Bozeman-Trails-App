var React = require('react');
var Link = require('react-router').Link;

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<Link to='/profile'>
						<button className="btn btn-info btn-xs mainbuttontwo">Profile</button>
					</Link>

					<div className="container-fluid jumbotron">

						<h1 className="theTitle"> Bozeman.by.trail </h1>
					
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



var React = require('react');
var Link = require('react-router').Link;
var Trails = require('./trails.js');

var Profile = require('./profile.js');



var Home = React.createClass({
	render: function(){
		return(

			<div className = "maindivhome">
			<div className = "container homepage">
				
				

				<div className>
				<Link to='/trails'> 
						<button className=" btn waves-effect waves-light btn-med mainbuttonhome">T r a i l s</button>
				</Link>

				</div>
				{this.props.children}

			</div>

			<div className= "box">
			</div>
			</div>
			)
	}
});
module.exports = Home;
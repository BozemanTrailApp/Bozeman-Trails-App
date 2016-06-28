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
						<button className="trailsbuttonmain btn btn-success btn-sm mainbuttonhome">T R A I L S</button>
				</Link>
				</div>
				

			</div>
			</div>
			)
	}
});
module.exports = Home;
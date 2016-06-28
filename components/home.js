var React = require('react');
var Link = require('react-router').Link;
var Trails = require('./trails.js');

var Profile = require('./profile.js');



var Home = React.createClass({
	render: function(){
		return(
			<div>
				

				<Link to='/trails'> 
						<button className="btn btn-info btn-lg btn-block mainbuttonone">T R A I L S</button>
				</Link>
				

					

			</div>
			)
	}
});
module.exports = Home;
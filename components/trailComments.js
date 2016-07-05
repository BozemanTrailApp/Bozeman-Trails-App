//TrailsApp
	//AllTrailsData
		//AllTrails
			//TrailsList  
	//ViewTrailData
		//TrailCard
			//TrailComments
var React = require('react');

var TrailComments = React.createClass({
	render: function(){
		return(
			<div>
				{this.props}
			</div>
			)
	}
});
module.exports = TrailComments;
//TrailsApp
	//AllTrailsData
		//AllTrails 
			//TrailCard
			//TrailsList
var React = require('react');


var TrailsList = React.createClass({
	render: function(){
		return(
				<div>
					<div className = 'trailslist'>
						<h2>{this.props.trailName}</h2>
						<h3>{this.props.description}</h3>

					</div>
				</div>
			)
	}

});
module.exports = TrailsList;
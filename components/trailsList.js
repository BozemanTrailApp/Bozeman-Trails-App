//TrailsApp
	//AllTrailsData
		//AllTrails 
			//TrailsList
	//ViewTrailData
		//TrailCard
var React = require('react');


var TrailsList = React.createClass({
	render: function(){
		return(
				<div>
					<div className = 'row'>
						<div className ='col s12 m6'>
							<div className = 'card blue-grey darken-2'>
								<div className = 'card-content white-text'>
									<span className = 'card-title'> {this.props.trailName} </span>
									<p> {this.props.description} </p>
								<div className = 'card-action'>
									<a onClick = {this.props.getId.bind(null, 'viewOneTrail',this.props.id)} >More Info</a>
								</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
	}

});
module.exports = TrailsList;
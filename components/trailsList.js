//TrailsApp
	//AllTrailsData
		//AllTrails
			//TrailsList
	//ViewTrailData
		//TrailCard
			//TrailComments 
				//AllComments 
var React = require('react');


var TrailsList = React.createClass({
	render: function(){
		console.log(this.props);
		return(
				<div>
					<div className = 'row valign-wrapper'>
						<div className ='col s12 m6 '>
							<div className = 'card  z-depth-2'>
								<span className = 'card-title black-text'> {this.props.trailName} </span>
								<div className = 'card-image'>
									<img src = {this.props.trailHeadUrl}/>
								</div>
								<div className = 'card-content'>
									<p> {this.props.description} </p>
								</div>
								<div className = 'card-action'>
									<a onClick = {this.props.getId.bind(null, 'viewOneTrail',this.props.id)} >More Info</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
	}

});
module.exports = TrailsList;
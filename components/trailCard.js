//TrailsApp
	//AllTrailsData
		//AllTrails 
			//TrailsList
	//ViewTrailData
		//TrailCard

 
var React = require('react');
var Link = require('react-router').Link; 

var TrailCard = React.createClass({
	render: function(){
			return(
				<div>
					
				<div className="trailCard">
					<h3>{this.props.oneTrail.trailName}</h3>
					<h3>Difficulty: {this.props.oneTrail.difficulty} </h3>
					<h3>Length: {this.props.oneTrail.length} </h3>
					<h3>Location: {this.props.oneTrail.location} </h3>
					<h3> {this.props.oneTrail.description} </h3>
					<h3> {this.props.oneTrail.directions}</h3>
					<h3> {this.props.oneTrail.trailHeadUrl} </h3>
					<h3> {this.props.oneTrail.comments} </h3>
					<h3> {this.props.oneTrail.userImage}</h3>
				</div>
				<div>
					<iframe height = '600px' width ='600px' src = {this.props.oneTrail.mapUrl}/>
				</div>
				<div className = 'backtotrails'>
					 
							<a onClick = {this.props.toggleActiveComp.bind(null, 'allTrails')}>Back to Trails</a>
					
				</div>
				{this.props.children}		
			</div>
				)



		}


}); 


module.exports = TrailCard;

 
var React = require('react'); 

var TrailCard = React.createClass({ 
		render:function (){
			return (
			<div>		
				<div className="trailCardy">
				<h3>Trail: { this.props.trailName } </h3>
				<h3>Difficulty: {this.props.difficulty } </h3>
				<h3>Length: {this.props.length } </h3>
				<h3>Location: {this.props.location } </h3>
				<h3>Description: { this.props.description} </h3>
				<h3>Directions: {this.props.directions}</h3>

				<h3>Map: {this.props.mapUrl } </h3>
				<h3>Trailhead: {this.props.trailHeadUrl} </h3>
				<h3>Comments: {this.props.comments } </h3>
				<h3>Community Images: {this.props.userImage}</h3>

				<button className="btn btn-success" onClick={ this.props.getId.bind(null, "editOneTrail", this.props.id)} > Edit </button>
				<button className="btn btn-danger" onClick={ this.props.deleteTrailFromServer.bind(null, this.props.id)}> DELETE </button>

				</div>
			</div>
				)


		}

}); 

module.exports= TrailCard;

 
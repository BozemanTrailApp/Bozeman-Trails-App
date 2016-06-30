//TrailsApp
	//AllTrailsData
		//AllTrails
			//TrailCard

 
var React = require('react');
var Link = require('react-router').Link; 

var TrailCard = React.createClass({
	render: function(){
			return(
				<div>
					<div className = 'backtotrails'>
						<Link to='/trails'> 
							<button className="btn btn-info btn-sm btn-block mainbuttonone">Back to Trails</button>
						</Link>
					</div>		
				<div className="trailCard">
					<h3>{this.props.trailName}</h3>
					<h3>Difficulty: {this.props.difficulty} </h3>
					<h3>Length: {this.props.length} </h3>
					<h3>Location: {this.props.location} </h3>
					<h3> {this.props.description} </h3>
					<h3> {this.props.directions}</h3>
					<h3> {this.props.trailHeadUrl} </h3>
					<h3> {this.props.comments} </h3>
					<h3> {this.props.userImage}</h3>
				</div>
				<div>
					<iframe height = '600px' width ='600px' src = {this.props.mapUrl}/>
				</div>
				<div className = 'backtotrails'>
					<Link to='/trails'> 
							<button className="btn btn-info btn-sm ">Back to Trails</button>
					</Link>
				</div>		
			</div>
				)



		}


}); 


module.exports = TrailCard;

 
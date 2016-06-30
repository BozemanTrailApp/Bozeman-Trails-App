//TrailsApp
	//AllTrailsData
		//AllTrails
			//TrailCard

var React = require('react');
var TrailCard = require('./trailCard.js');

function AllTrails(props){
	var trails = props.trails.map(function(item){
		return <TrailCard trailName = {item.trailName}
							difficulty = {item.difficulty}
							length = {item.length}
							location = {item.location}
							description = {item.description}
							comments = {item.comments}
							mapUrl = {item.mapUrl}
							trailHeadUrl = {item.trailHeadUrl}
							userImage = {item.userImage.imageUrl}
							directions = {item.directions}
							getId = {props.getId}
							key = {item._id}
							id = {item._id}/>
	});
	return(
		<div>
			{trails}
		</div>
		)
};
module.exports = AllTrails; 
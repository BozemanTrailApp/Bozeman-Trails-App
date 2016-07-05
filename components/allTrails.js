//TrailsApp
	//AllTrailsData
		//AllTrails  
			//TrailsList
	//ViewTrailData
		//TrailCard
var React = require('react');
var TrailCard = require('./trailCard.js');
var TrailsList = require('./trailsList.js');

function AllTrails(props){
	var trails = props.trails.map(function(item){
		return <TrailsList trailName = {item.trailName}
							description = {item.description}
							trailHeadUrl = {item.trailHeadUrl}
							key = {item._id}
							id = {item._id}
							getId = {props.getId}/>
});
	return(
		<div>
			{trails}

		</div>
		)
};
module.exports = AllTrails; 
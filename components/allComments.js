//CommentsApp
	//AllTrailsData
		//AllTrails
			//TrailsList
	//ViewTrailData
		//TrailCard
			
				//AllComments 

var React = require('react');


var AllComments = React.createClass({
	render: function(){
		console.log(this.props);
		return(
				<div>
					{this.props.body}
					{this.props.date}
					{this.props.user}
				</div>
			)
	}

});
module.exports = AllComments;
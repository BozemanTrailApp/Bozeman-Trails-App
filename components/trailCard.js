//TrailsApp
	//AllTrailsData
		//AllTrails
			//TrailsList
	//ViewTrailData
		//TrailCard 
			//AllComments 
 
var React = require('react');
var Link = require('react-router').Link;
var AllComments = require('./allComments.js');



var TrailCard = React.createClass({
		
			
		
		render: function(){
			var comments = this.props.oneTrail.comments.map(function(item){
				return <AllComments body = {item.body}
								user = {item.user}
								date = {item.date}
								key = {item._id}
								id = {item._id}
								imageUrl = {item.imageUrl}/>
				});	
			console.log(this.props, "I am from line 36")
			return(
				<div>
					<div>
						<div className =  'row'>
							<div className = 'col s12 m5'>
								<div className = 'card grey darken-4 z-depth-2'>
									<div className = 'card-content white-text'>
										<span className = 'card-title'>{this.props.oneTrail.trailName}</span>
										<ul>
											<li className = 'white-text'>Difficulty: {this.props.oneTrail.difficulty} </li>
											<li className = 'white-text'>Length: {this.props.oneTrail.length} </li>
											<li className = 'white-text'>Location: {this.props.oneTrail.location} </li>
											<li className = 'white-text'>{this.props.oneTrail.directions}</li>
										</ul>
											<p className = 'white-text'> {this.props.oneTrail.description} </p>
											
											<div className = 'card-action'>
												<a onClick = {this.props.toggleActiveComp.bind(null, 'allTrails')}>Back to Trails</a> 
											</div>
											
											
									</div>
								</div>
								
							</div>
						</div>
						<div>
							<iframe height = '600px' width ='600px' src = {this.props.oneTrail.mapUrl}/>
						</div>
						<div>{ comments }</div>	
					</div>
										
				</div>
				)



		}
		


}); 


module.exports = TrailCard;

 
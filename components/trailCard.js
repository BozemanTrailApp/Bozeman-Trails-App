//TrailsApp
	//AllTrailsData
		//AllTrails
			//TrailsList
	//ViewTrailData
		//TrailCard
			//TrailComments
				//AllComments 
 
var React = require('react');
var Link = require('react-router').Link;
var AllComments = require('./allComments.js');



var TrailCard = React.createClass({
		getInitialState: function(){
			return {
				comments: ""
			}
		},
		commentMap: function (){
			var comments = this.props.oneTrail.comments.map(function(item){
			console.log("mapping")
			return <AllComments body = {item.body}
								user = {item.user}
								date = {item.date}
								key = {item._id}/>
			});
			console.log('done mapping')
			return(
				<div>
					{comments}
				</div>
			)
		},
		render: function(){
			console.log(this.props)
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
												<a onClick = {this.props.toggleActiveComp.bind(null, 'allTrails')}>Back to Trails</a> <a onClick = {this.props.toggleActiveComp.bind(null, 'trailComments')}>View Trail Comments</a>
											</div>
											
											
									</div>
								</div>
								{this.commentMap()}
							</div>
						</div>
				    				

									<div>
										<iframe height = '600px' width ='600px' src = {this.props.oneTrail.mapUrl}/>
									</div>

									
					</div>
										
				</div>
				)



		}
		


}); 


module.exports = TrailCard;

 
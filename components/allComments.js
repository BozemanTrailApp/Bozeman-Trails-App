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
		console.log(this.props.body);
		return(
				<div>
					<div>
						<div>
							<div className = ' col s12 m5'>
								<div className = 'card grey darken-4 z-depth-2'>
									<div className = 'card-content white-text'>
										<span className = 'card-title'>{this.props.trailName} Comments</span>
										<ul>
											<li className = 'white-text'> {this.props.body} </li>
											<li className = 'white-text'>({this.props.date}</li>
											<li className = 'white-text'>By: {this.props.user} </li>
											
										</ul>
														
																				
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>

			)
	}

});
module.exports = AllComments;
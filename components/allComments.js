//trailsApp
	//AllTrailsData
		//AllTrails
			//TrailsList
	//ViewTrailData
		//TrailCard
			//AllComments 

var React = require('react');
var AddCommentForm = require('./addCommentForm.js');


var AllComments = React.createClass({ 
	dateLogic: function(){
		let date = this.props.date;
		let dateString = date.toString();
		let trimDate = dateString.substring(0,10);
			return trimDate
		},
		
		
	userLogic: function(){
		//console.log(this.props.user);
		if(this.props.user){
			return(<div><li className = 'white-text'>{this.props.user.userName} Says: </li></div>)
		}else{
			return (<div><li className = 'white-text'>Anonymous Says:</li></div>)
		}
	},
	render: function(){
		// console.log(this.userLogic());
		return(
				<div>
						
					<div className = 'container'>
						<div className = ' col s12 m5'>
							<div className = 'card grey darken-4 z-depth-2'>
								<div className = 'card-content white-text'>
									<ul>
										{this.userLogic()}
										<li className = 'white-text'> {this.props.body} </li>
										<li className = 'white-text'>{this.dateLogic()}</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

				</div>
			)
	}

});
module.exports = AllComments;
var React = require('react');


var AddCommentForm = React.createClass({
	
	render: function(){
		console.log(this.props.user, "I am the user");
		
		return(
			<div>
				<div className = 'row'>
					<form className = 'col s12' onSubmit={this.props.handleCommentSubmit}>
						<div className = 'row'>
							<div className = 'input-field col s6'>
								<input type = 'text' value={this.props.body} onChange={this.props.handleBodyChange}/>
								<label>What do you want to say?</label>
								<button type = 'submit'>Add a Comment</button>
							</div>
						</div>
					</form>
				</div> 
			</div>
			)
		
			
	}
});
module.exports = AddCommentForm;
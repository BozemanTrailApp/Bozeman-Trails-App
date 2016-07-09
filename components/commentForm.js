//CommentForm
	//AddCommentForm

var React = require('react');

var AddCommentForm = require('./addCommentForm');

var CommentForm = React.createClass({
	getInitialState: function(){
		return {
			body: null,
			trailById: null,
			user: null
		}
	},

	handleBodyChange: function(event){
		this.setState({body: event.target.value})
	},

	handleCommentSubmit: function(event){
		event.preventDefault();
		var comment = {};
		//comment.user = this.state.user;
		//comment.date = this.state.date;
		comment.body = this.state.body;
		this.addCommentToTrail(comment);
		this.setState({ body: ''});
	},
	getUserFromServer: function(){
		var self = this;

		$.ajax({
			method: 'GET',
			url: '/user'
		}).done(function(data){
			console.log(data);
			self.setstate({user: data});
		})
	}, 

	getOneTrailFromServer: function(){
		var self = this;
		$.ajax({
			url: '/trails/' + this.props.oneTrailId,
			method: 'GET'
		}).done(function(data){
			console.log(data);
			self.setState({trailById: data});
		})
	},

	addCommentToTrail: function(comment){
		var self = this;
		var trailUpdate = self.state.trailById;
		trailUpdate.comments.push(comment);
		self.setState({trailsById: trailUpdate});
		// console.log(self.state.trailsById);
		$.ajax({
			url: '/trails/' + this.props.oneTrailId,
			method: 'PUT',
			dataType: 'json',
			data: self.state.trailById,
			success: function(data){
				console.log('Adding a Comment', data);
				self.setState({trailById: data});
				self.getOneTrailFromServer();
			},
			error: function (xhr, status, err){
				console.error('Failed to add a Comment', status, err.toString()) 
			}

		})
	},

	componentDidMount: function(){
		this.getOneTrailFromServer();
	},
	render: function(){
		return(
				<div>
					<AddCommentForm handleCommentSubmit = {this.handleCommentSubmit}
									handleBodyChange = {this.handleBodyChange}
									body = {this.state.body}
									getUserFromServer ={ this.getUserFromServer}
									/>
				</div>
			)
	}
});
module.exports = CommentForm;
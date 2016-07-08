//CommentForm
	//AddCommentForm

var React = require('react');

var AddCommentForm = require('./addCommentForm');

var CommentForm = React.createClass({
	getInitialState: function(){
		return {
			user: null,
			date: null,
			body: null
		}
	},
	handleBodyChange: function(event){
		this.setState({body: event.target.value})
	},
	handleCommentSubmit: function(event){
		event.preventDefault();
		var comment = {};
		comment.user = this.state.user;
		comment.date = this.state.date;
		comment.body = this.state.body;
		this.handleNewComment(comment);
		this.setState({user: '', date: '', body: ''});
	},
	getOneTrailFromServer: function(){
		var self = this;
		$.ajax({
			url: '/trails',
			method: 'GET'
		}).done(function(data){
			console.log(data);
			self.setState({trail: data});
		})
	},
	addCommentToTrail: function(comment){
		var self = this;
		var newComment = self.state.trails.comments.push(comment);
		self.setState({trails: newComment});
		console.log(self.state.trail);
		$.ajax({
			url: '/trails' + self.state.trail._id,
			method: 'PUT',
			dataType: 'json',
			data: comment,
			success: function(data){
				console.log('Adding a Comment', data);
				self.setState({trail: data});
				self.getOneTrailFromServer();
			},
			error: function (xhr, status, err){
				console,error('Failed to add a Comment', status, err.toString())
			}

		})
	},
	componentDidMount: function(){
		this.getOneTrailFromServer();
	},
	render: function(){
		return(
				<div>
					<AddCommentForm addCommentToTrail = {this.addCommentToTrail}
									getOneTrailFromServer = {this.getOneTrailFromServer}
									handleCommentSubmit = {this.handleCommentSubmit}
									handleBodyChange = {this.handleBodyChange}/>
				</div>
			)
	}
});
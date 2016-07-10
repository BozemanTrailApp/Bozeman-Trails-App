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
		//this.setState({user: ''});
	},
	getOneUserFromServer: function(){ 
		var self = this;
			$.ajax({
				method:'GET',
				url:'/user'
			}).done(function(data){
				console.log(data);
				self.setState({ user: data });
			}) 
	}, 

	getOneTrailFromServer: function(){
		var self = this;
		$.ajax({
			url: '/trails/' + this.props.oneTrailId,
			method: 'GET'
		}).done(function(data){
			//console.log(data);
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
				self.setState({userById: data});
				self.getOneTrailFromServer();
				self.getOneUserFromServer();
			},
			error: function (xhr, status, err){
				console.error('Failed to add a Comment', status, err.toString()) 
			}

		})
	},

	componentDidMount: function(){
		this.getOneTrailFromServer();
		//this.getOneUserFromServer();
	},
	render: function(){
		return(
				<div>
					<AddCommentForm handleCommentSubmit = {this.handleCommentSubmit}
									handleBodyChange = {this.handleBodyChange}
									body = {this.state.body}
									user = {this.state.user}
									/>
				</div>
			)
	}
});
module.exports = CommentForm;
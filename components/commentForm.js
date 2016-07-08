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
	handleNewComment: function(comment){
		var self = this;
		$.ajax({
			url: '/trails',
			method: 'PUT',
			dataType: 'json',
			data: comment,
			
		})
	}
});
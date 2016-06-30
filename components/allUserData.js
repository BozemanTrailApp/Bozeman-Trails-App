//allUserData
	//userPage 
		//userCard 

var React = require('react'); 
var UserPage = require('./userPage');

var AllUserData = React.createClass({
	getInitialState: function() {
		return {
			user: []
		}
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

	componentDidMount: function() {
		this.getUserFromServer();
	},

	render : function() {
		return this.state.user ? <UserPage getId = {this.props.getId} user = {this.state.user} /> : null; 
	}
}); 

module.exports = AllUserData; 
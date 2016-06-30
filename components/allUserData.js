//allUserData
	//userPage 
		//userCard 

var React = require('react'); 
var UserCard = require('./userCard');

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
		var user = this.state.user ? <UserCard getId = {this.props.getId} user = {this.state.user} /> : null;

		return (
				<div>
				{user}
				</div>
			) 
	}
}); 

module.exports = AllUserData; 
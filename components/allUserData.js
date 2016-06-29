//allUserData
	//userPage 
		//userCard 

var React = require('react'); 
var UserPage = require('./userPage');

var allUserData = React.createClass({
	getInitialState: function() {
		return {
			user: []
		}
	},

	getUserFromServer: function(){
		var self = this;

		$.ajax({
			method: 'GET'
			url: '/user'
		}).done(function(data){
			console.log(data);
			self.setstate({user: data});
		})
	}, 

	componentDidMount: function() {

		return.this.state.user ? <userPage getId = {this.props.getId} user = {this.state.userPage} />
	}
}); 

module.exports = allUserData; 
var React = require('react');

var CreateAccountForm = require('./createAccountForm');


var CreateAcountData = React.createClass({
	getInitialState: function(){
		return{
			userName: null,
			firstName: null,
			lastName: null,
			email: null,
			password: null,
		}
	},
	handeleUserName:function(event){
		this.setState({ userName:event.target.value })
	},
	handleFirstNameChange: function(event){
		this.setState ({ firstName: event.target.value })
	},
	handleLastNameChange: function(event){
		this.setState ({ lastName: event.target.value })
	},

	handleEmailChange: function(event){
		this.setState ({ email: event.target.value })
	},
	handlePassWordChange: function(event){
		this.setState ({ password: event.target.value })
	},
	
	handleUserSubmit: function(event){
		event.preventDefault();
		console.log(this);
		var user = {};

		user.userName = this.state.userName;
		user.firstName = this.state.firstName;
		user.lastName = this.state.lastName;
		user.email = this.state.email;
		user.password = this.state.password;
		

		this.handleNewUserPost(user);
		this.setState({
			userName: '', firstName: '' , lastName: '' , email: '' , password: '' 
		});
	},
	handleNewUserPost: function(user){

		$.ajax({
			url:'/auth',
			method: 'POST',
			dataType: 'json',
			data: user,
			success: function(data){
			}.bind(this),
			error: function(xhr, status, error){
				console.log('/user', status, error.toString());
			}.bind(this)
		})
	}, 

  

	  render: function(){
	    return (
	      <div>
				<h1></h1>
				<CreateAccountForm 		handleUserSubmit={this.handleUserSubmit} 
										handeleUserName={this.handeleUserName}
										handleFirstNameChange={this.handleFirstNameChange}
										handleLastNameChange={this.handleLastNameChange}
										handleEmailChange={this.handleEmailChange}
										handlePassWordChange={this.handlePassWordChange}
										
				/>
			</div>
	      )
	}
});

module.exports = CreateAcountData;
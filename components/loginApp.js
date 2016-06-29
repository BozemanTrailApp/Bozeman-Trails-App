//loginApp
//	loginAccount
//		loginAccountData
//			loginAccountForm
//	CreateAccount
//		CreateAccountData
//			CreateAccountForm

var LoginAccount = require('./login/loginAccountForm');
var CreateAccount = require('./login/createAccount');

var React = require('react');

var LoginApp =  React.createClass({

	getInitialState: function(){
		return { 
			showResults: false
		};
	},
	hideCreateAccount: function (){
		this.setState({ 
			showResults: true 
		});
	},
	hideLoginAccount: function (){
		this.setState({
			showResults: false
		});
	},

	render: function(){
		return (
			<div>
				<div className = 'nav nav-bar '>

					
						<input type="submit" value="Login" onClick = {this.hideCreateAccount} />
						
						<CreateAccount />
						
						<input type="submit" value="Reset" onClick = {this.hideLoginAccount} />
						
						{this.state.showResults ? <LoginAccount/> : null }
								

				</div>
			</div>
			);
	}
});


module.exports = LoginApp;






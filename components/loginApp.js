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
				<div>
					<input type="submit" value="Login" onClick={this.hideCreateAccount} />
					{this.state.showResults ? <LoginAccount/> : null }
				</div>
				<div>
					<CreateAccount />
				</div>
				<div>
					<input type="submit" value="Reset" onClick={this.hideLoginAccount} />	
					
				</div>
			</div>
			);
	}
});


module.exports = LoginApp;






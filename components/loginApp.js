// var Login = require('./login/login');
// var Create = require('./login/create');

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
					<input type="submit" value="Create Login" />	
				</div>
				<div>
					<input type="submit" value="Reset" onClick={this.hideLoginAccount} />	
					
				</div>
			</div>
			);
	}
});

var CreateAccount = React.createClass({

	render: function(){
		return (
				<div id="Create">
					<input value="User Name" />
					<input value="Password" />
					<input value="First Name" />
					<input value="Last Name" />

				</div>
			)
	}

});


var LoginAccount = React.createClass({


	render: function(){
		return (
				<div id="Login">
					<input value="User Name "  />
					<input value="Password" />
					<button>Submit</button>
				</div>
			)
	}

});

module.exports = LoginApp;






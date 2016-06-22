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
		})
	},



	render: function(){
		return (
			<div>
				<div>
					<input type="submit" value="Login" onClick={this.hideCreateAccount} />
					{this.state.showResults ? <LoginAccount/> : null }
				</div>
				<div>
					<input type="submit" value="Create Login" onClick={this.hideLoginAccount} />	
					{this.state.showResults ? <CreateAccount/> : null }
				</div>
			</div>
			);
	}
});

var CreateAccount = React.createClass({

	render: function(){
		return (
				<div id="Create">
					<button> Login </button>
				</div>
			)
	}

});


var LoginAccount = React.createClass({


	render: function(){
		return (
				<div id="Login">
					<button> Create </button>
				</div>
			)
	}

});

module.exports = LoginApp;






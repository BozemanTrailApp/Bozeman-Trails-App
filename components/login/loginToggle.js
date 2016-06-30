var React = require('react');

var LoginToggle = React.createClass({

	render: function(){
		return(
			<div>
				<button className="btn btn-warning" 
				onClick={this.props.toggleActiveComponent.bind(null,'UserLoginData')}> Login </button>
				<button className="btn btn-warning" 
				onClick={this.props.toggleActiveComponent.bind(null,'UserSignupData')}> Create Login </button>
				<button className="btn btn-warning"
				onClick={this.props.toggleActiveComponent.bind(null,'LogoutUser')}> Log-Off </button>

			</div>
			)
	}
})

module.exports = LoginToggle;
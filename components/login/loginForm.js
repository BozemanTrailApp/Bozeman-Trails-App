var React = require('react');

var LoginForm = React.createClass({
	

	render: function(){
		return (
			<div>
				<div className="auth">
					<form className="form-inline" onSubmit={this.props.handleLoginSubmit}>
						<label>Email</label>
					        <input type="text" name="email" placeholder="Login Name" 
					        onChange={this.props.handleEmailLogin}	/>
					    <label>PassWord</label>
					        <input type="password" name="password" placeholder="Password"
					        onChange={this.props.handlePassWordLogin}	 />
			          <button type="submit" className="btn btn-Primary">Click to Login</button>
        			</form>
				</div>	
			</div>
		)
	}
});

module.exports = LoginForm;
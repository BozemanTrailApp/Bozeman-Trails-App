var React = require('react');

var LoginAccountForm = React.createClass({
	

	render: function(){
		return (
			<div>
				<div>
					<form className="form-inline" onSubmit={this.props.handleLoginSubmit}>

						<label>User Name</label>
					        <input type="text" name="User Name" placeholder="User Name" 
					        onChange={this.props.handleUserNameLogin}	/>

					    <label>Password</label>
					        <input type="password" name="password" placeholder="Password"
					        onChange={this.props.handlePasswordLogin}	 />

			         	 <button type="submit" className="btn btn-Primary">Click to Login</button>
        			</form>
				</div>	
			</div>
		)
	}
});

module.exports = LoginAccountForm;

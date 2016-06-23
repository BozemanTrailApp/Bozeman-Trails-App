var React = require('react');				


var CreateAccountForm = React.createClass({

	render: function(){
		return (
				<div>
					<div className="auth">
						<form className="form-inline" onSubmit={this.props.handleUserSubmit}>
							<label>User Name</label>
						        <input type="text" name="User Name" placeholder="User Name" 
						        onChange={this.props.handeleUserName}	/>

							<label>First Name</label>
						        <input type="text" name="First Name" placeholder="First Name" 
						        onChange={this.props.handleFirstNameChange}	/>

							<label>Last Name </label>
						        <input type="text" name="Last Name" placeholder="Last Name" 
						        onChange={this.props.handleLastNameChange}	/>

							<label>Email Address</label>
						        <input type="text" name="Email Address" placeholder="Email Address" 
						        onChange={this.props.handleEmailChange}	/>
						
						    <label>Password</label>
						        <input type="password" name="Password" placeholder="Password"
						        onChange={this.props.handlePassWordChange}	 />
				        
				          <button type="submit" className="btn btn-Primary">Click to Create Account</button>
	        			</form>
	        		</div>
				</div>
			)
	}

});


module.exports = CreateAccountForm;
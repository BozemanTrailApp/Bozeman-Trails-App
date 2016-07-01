//UserAuth
//	UserLoginData
//		UserLoginForm
//	UserSignupData
//		UserSignupForm

var React = require('react');


var UserSignupForm = React.createClass({

	render: function(){
		return (

	<div>

	 	<div className="showhide">
	 	<div className="card">	
		<div className="row">
		    <form className="col s12" onSubmit={ this.props.handleUserSignupSubmit }>
		    	<div className="row">
		        	<div className="input-field col s12">
		          	<input  type="text" onChange={ this.props.onUsernameChange } value={ this.props.userName } className="validate"/>
		          	<label>User Name</label>
		        	</div>
		      	</div>
		      		<div className="row">
		        	<div className="input-field col s12">
		         		<input  type="password" onChange={ this.props.onPasswordChange } value={ this.props.password } className="validate"/>
		          		<label>Password</label>
		        	</div>
				  	</div>
		      	    <div className="row">
		        	<div className="input-field col s6">
		         		<input type="text" onChange={ this.props.onFirstNameChange } value={ this.props.firstName } className="validate"/>
		          		<label>First Name</label>
		        	</div>
		        	<div className="input-field col s6">
		          		<input  type="text" onChange={ this.props.onLastNameChange } value={ this.props.lastName } className="validate"/>
		          		<label>Last Name</label>
		        	</div>
		      		</div>
		      		<div className="row">
		        	<div className="input-field col s6">
		         		<input type="text" onChange={ this.props.onAgeChange } value={ this.props.age } className="validate"/>
		          		<label>Age</label>
		        	</div>
		        	<div className="input-field col s6">
		          		<input  type="text" onChange={ this.props.onGenderChange } value={ this.props.gender} className="validate"/>
		          		<label>Gender</label>
		        	</div>
		      		</div>

				<div className="row">
		        	 <div className="input-field col s12">
		          		<input type="email" onChange={ this.props.onEmailChange } value={ this.props.email }  className="validate"/>
		          		<label>Email</label>
		        	</div>
		      	</div>


		    


		      	<button className="btn waves-effect waves-light" type="submit" name="action">Submit
	  			</button>
		    </form>
	 	</div>
	 	</div>
	 	</div>
	 			
	</div>
			)
	}
});


module.exports = UserSignupForm;
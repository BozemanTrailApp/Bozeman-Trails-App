const React = require('react');
const Link = require('react-router').Link;


class UserLog extends React.Component{
	render(){
		return(
			

			<div>
			<div className = "wholeform">
		    	<form className="col s6 hikeform" onSubmit={ this.props.handleHikeLogSubmit }>
		      	<div className="row">
		        	<div className="input-field col s4">
		         		<input  type="text" onChange={ this.props.onHikeNameChange } value={ this.props.hikeName } className="validate"/>
		          		<label>Hike</label>
		        	</div>
				</div>
		      	<div className="row">
		        	<div className="input-field col s4">

		         		<input  type="date" onChange={ this.props.onDateChange } value={ this.props.date} className="validate"/>

		        	</div>
				</div>
		      	<div className="row">
		        	<div className="input-field col s4">
		         		<input type="text" onChange={ this.props.onMilesChange } value={ this.props.miles } className="validate"/>
		          		<label>Enter miles completed</label>
		        	</div>
		        </div>
				<button className="submitlogbutton btn waves-effect waves-light" type="submit" name="action">Submit
	  			</button>
	  		</form>
	 	</div>
	 </div>
	




			)
	}
};


module.exports = UserLog;
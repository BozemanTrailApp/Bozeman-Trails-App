const React = require('react');
const Link = require('react-router').Link;

class UserLog extends React.Component{
	render(){
		return(
			

			<div>
		    
		    	<div className="row logform">
		        	<div className="input-field col s4">
		          	<input  type="text" onChange={ this.props.onHikeChange } value={ this.props.hikeName } className="validate"/>
		          	<label>Hike</label>
		        	</div>
		      	</div>
		      		<div className="row">
		        	<div className="input-field col s4">
		         		<input  type="text" onChange={ this.props.onDateChange } value={ this.props.date} className="validate"/>
		          		<label>Date</label>
		        	</div>
				  	</div>

		      	    <div className="row">
		        	<div className="input-field col s4">
		         		<input type="text" onChange={ this.props.onmilesChange } value={ this.props.miles } className="validate"/>
		          		<label>Enter miles completed</label>
		        	</div>
		        	</div>
		

					<button id = "submitlog" className="btn waves-effect waves-light" type="submit" name="action">Submit
	  			</button>

	 	</div>
	




			)
	}
};


module.exports = UserLog;
var React = require('react');

var ShowLogForm = React.createClass({
	render: function(){
		return(
				<div className="well col-xs-4">
					<h3>UserName is: {this.props.userName }</h3>
					<h3>My First Name is: {this.props.firstName}</h3>
					<h3>My last Name is:  {this.props.lastName}</h3>
					<h3>My Email is: {this.props.email} </h3>
					<h3>My Password is: {this.props.password} </h3>
				</div>
			
			)
	}
});
module.exports = ShowLogForm;
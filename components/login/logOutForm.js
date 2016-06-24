var React = require('react');


var LogOutForm = React.createClass({

 render: function(){
	    return (
	    <div>
			<form className="form-inline" onSubmit={this.props.handleLogOutSubmit}>
				<button type="submit" className="btn btn-Primary">Click to Log off!</button>
			</form>
		</div>
	      )
	}
});

module.exports = LogOutForm;
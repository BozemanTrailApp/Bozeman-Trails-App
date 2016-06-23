var React = require('react');
var Link = require('react-router').Link;


var CreateAccount = React.createClass({

	render: function(){
		return (
				<div>
						<Link to = '/createAccount'>
						<button className = 'btn btn-default'>Create account</button>
					</Link>
				</div>
			)
	}

});


module.exports = CreateAccount;
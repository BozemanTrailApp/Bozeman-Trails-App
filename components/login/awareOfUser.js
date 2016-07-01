var React = require('react');



var AwareOfUser = React.createClass({

	render: function(){
		
	if(this.props.user.user !== "anonymous"){
			return(
				<div >
					<h2> Hello {this.props.user.userName} </h2>
					
				</div>
				)
		} else {
			return(
				<div >
					<h2> Please Sign in </h2>
				</div>	
				)
		}

	}
});
module.exports = AwareOfUser;


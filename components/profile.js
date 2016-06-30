var React = require('react');
// var Link = require('react-router').Link;
// var UserLog = require('./userLog.js');
var UserAuth = require('./login/userAuth.js');
var AwareofUser = require('./login/awareOfUser');


var Profile = React.createClass({
	getInitialState: function(){
		return {
			user: null
		}
	},

	getOneUserFromServer: function(){
		var self = this;
			$.ajax({
				method:'GET',
				url:'/user'
			}).done(function(data){
				console.log(data);
				self.setState({ user: data });
			})
	},

	componentDidMount: function(){
		this.getOneUserFromServer();
	},

	render: function(){
			if(this.state.user.user !== "anonymous"){
			return(
				<div>
			<div className = "profilecontainer">
			   	<div className = "profile">
			   		 <h1>user's prof</h1>
					
					<h2> Hello {this.state.user.userName} </h2>

				     </div>
				</div>
			</div>
			
			)
		} else {

		return(
			<div>
			<div className = "profilecontainer">
			   	<div className = "profile">
			   		 <h1>user's prof please sign in</h1>
					
					

				     </div>
				</div>
			</div>
			
			)
		}

	}

});

module.exports = Profile;


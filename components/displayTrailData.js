	//<UserLogData miles = {this.state.miles} id = {this.state.miles} />

//allUserData
	//userPage 
		//userCard 

var React = require('react'); 
var UserLogData = require('./login/userLogData.js');

var DisplayTrailData = React.createClass({
	getInitialState: function() {
		return {
			miles: ""
		}
	},

	getUserFromServer: function(){
		var self = this;

		$.ajax({
			method: 'GET',
			url: '/user'
		}).done(function(data){
			console.log(data);
			self.setstate({miles: data});
		})
	}, 

	componentDidMount: function() {
		this.getUserFromServer();
	},

	render : function() {
		var miles = this.state.user.trailLog.miles.data.map(function(item){
				return
					<UserLogData
					miles={item} 
					/>
				});

		return (
				<div>

				{ miles }
				
				</div>
			) 
	}
}); 

module.exports = DisplayTrailData; 
var React = require('react');
var UserLog = require('./userLog.js');

var UserLogData = React.createClass({

	getInitialState: function(){
		return {

			hikeName: '',
			date: '',
			miles: ''
		
		}
   
    },
	onHikeNameChange: function(e){
		this.setState({ hikeName: e.target.value })
		//console.log(this.state.hikeName);
	},
	onDateChange: function(e){
		this.setState({ date: e.target.value })
	},
	onMilesChange: function(e){
		this.setState({ miles: e.target.value })
	},
	handleHikeLogSubmit: function(e){
		e.preventDefault();
		
		var log = 
				{
				hikeName: "",
				date: "",
				miles: ""

		};

		var hike = this.state.hikeName;
		var time = this.state.date;
		var distance = this.state.miles;


		log.hikeName = hike;
		log.date = time;
		log.miles = distance;

		console.log(log);

		this.props.addHikeToUser(log);
		this.setState({ hikeName: '', date: '', miles: ''});
	},
	render: function(){
		return (
			<div>



        		<UserLog
        		handleHikeLogSubmit={ this.handleHikeLogSubmit }
        		onHikeNameChange={ this.onHikeNameChange}
        		onDateChange={this.onDateChange}
        		onMilesChange={this.onMilesChange}

        		hikeName={ this.state.hikeName }
        		date={ this.state.date }
        		miles={ this.state.miles }
        		/>


				
     		 </div>
			)
	}
});

module.exports = UserLogData;
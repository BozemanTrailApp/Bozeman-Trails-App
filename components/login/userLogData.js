//UserTrailLog
	//UserLogData
		//UserLog

var React = require('react');
var UserLog = require('./userLog.js');

var UserLogData = React.createClass({ 

	getInitialState: function(){
		return {
			hikeName: null ,
			date: null,
			miles: null
		};
   
    },
	onHikeNameChange: function(e){

		this.setState({ hikeName: e.target.value });
		//console.log(this.state.hikeName)
		//this.forceUpdate();
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

		var log = {

				hikeName: null,
				date: null,
				miles: null

		};

		var hike = this.state.hikeName;
		var time = this.state.date;
		var distance = this.state.miles;

		log.hikeName = hike;
		log.date = time;
		log.miles = distance;
			

		if (hike == null ){

			alert("Please fill in your Hike!");

		} else if (time == null ){

			alert("Please Select your Date");

		} else if (distance == null ){

			alert("Please Put Down your Miles");

		} else {

			console.log(log);
			this.props.addHikeToUser(log);
			this.setState({ hikeName: null, date: null, miles: null});
			
		};

		
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



// trailName: [
// 				{value: null, name: 'Select' },
// 				{value:'Sourdough' , name: 'Sourdough Trail'},
// 				{value:'Leverich Canyon Mountain Trail', name: 'Leverich Canyon Mountain Trail'},
// 				{value:'Main Street to Peets Hill', name: 'Main Street to Peets Hill' },
// 				{value:'Gallagator Linear Trail', name: 'Gallagator Linear Trail' },
// 				{value:'Sypes Canyon' , name: 'Sypes Canyon' }
// 			]

//trailName={this.state.trailName}


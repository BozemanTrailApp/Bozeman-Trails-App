//TrailsApp
	//AllTrailsData
		//AllTrails
			//TrailCard

var React = require('react');
var AllTrails = require('./allTrails.js');	


var AllTrailsData = React.createClass({
	getInitialState: function(){
		return{
			trails: []
		}
	},
	getAllTrailsFromServer: function(){
		var self = this;
		$.ajax({
			method: 'GET',
			url: '/trails'
		}).then(function(data){
			console.log(data);
			self.setState({trails: data})
		})
	},
	componentDidMount: function(){
		this.getAllTrailsFromServer();
	},
	render(){
		return this.state.trails ? <AllTrails getId = {this.props.getId} trails = {this.state.trails}/> : null;
	}
});
module.exports = AllTrailsData; 
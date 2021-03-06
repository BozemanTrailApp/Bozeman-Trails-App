//TrailsApp
	//AllTrailsData
		//AllTrails
			//TrailsList
	//ViewTrailData
		//TrailCard
			//TrailComments
				//AllComments 

var React = require('react');
var TrailCard = require('./trailCard.js')

var ViewTrailData = React.createClass({
	getInitialState: function(){
		return {
			oneTrail: null
		}
	},
	getOneTrailFromServer: function(){
		var self = this;
	$.ajax({
		method: 'GET',
		url: '/trails/' + this.props.id
		}).done(function(data){
			//console.log(data); 
			self.setState({oneTrail: data})

		})
			
	},
	componentDidMount: function(){
		this.getOneTrailFromServer();
	},
	render(){
		return this.state.oneTrail ? <TrailCard oneTrailId={ this.props.id }  oneTrail = {this.state.oneTrail} toggleActiveComp = {this.props.toggleActiveComp}/> : this.state.oneTrail;
	}
});
module.exports = ViewTrailData;
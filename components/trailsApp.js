//TrailsApp 
	//AllTrailsData
		//AllTrails 
			//TrailsList
	//ViewTrailData
		//TrailCard
var React = require ('react');
var AllTrailsData = require ('./allTrailsData.js');
var ViewTrailData = require('./viewTrailData.js')

var TrailApp = React.createClass({
	getInitialState: function(){
		return{
			activeComponent: 'allTrails',
			activeTrailId: null
		}
	},
	getId: function(component,id){
		if(component === 'viewOneTrail'){
			return this.setState({activeTrailId: id, activeComponent: 'viewTrail'})
		}else{
			return null;
		}
	},
	showComponent: function(){
		if(this.state.activeComponent === 'allTrails'){
			return <AllTrailsData getId = {this.getId}/>
		}else if(this.state.activeComponent === 'viewTrail'){
			return <ViewTrailData id = {this.state.activeTrailId} toggleActiveComp = {this.toggleActiveComponent}/>
		}else{
			throw new Error('No Active Component', this.state.activeComponent)
		}
	},

	toggleActiveComponent: function(name){
		this.setState({activeComponent: name})
	},
	render: function(){
		return(
			<div>
				{this.showComponent()}
			</div>
			)
	}
});
module.exports = TrailApp;
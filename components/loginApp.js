var React = require('react');

var CreateLoginPostData = require('./login/createLoginPostData.js');
var LoginToggle = require('./login/loginToggle.js');
var LoginData = require('./login/loginData.js');
var LogOffData = require('./login/logOffData.js');

var LoginApp = React.createClass({
	getInitialState: function(){
		return{
			activeComponent: 'LoginData'
			}
	},

	showComponent: function(){

		if(this.state.activeComponent === 'LoginData'){
			return <LoginData />
		} else if (this.state.activeComponent === 'CreateLoginPostData'){
			return <CreateLoginPostData toggleActiveComponent= { this.toggleActiveComponent} />
		} else if (this.state.activeComponent === 'LogOffData') {
			return <LogOffData toggleActiveComponent= { this.toggleActiveComponent} />
		} else 	{
			throw new Error('No active component', this.state.activeComponent )
		}
	},

	toggleActiveComponent: function(name){
		this.setState({
			activeComponent: name
		})
	},

	render: function(){
			
		return(
				<div>
					<LoginToggle toggleActiveComponent={this.toggleActiveComponent}/>
					{ this.showComponent() }					
				</div>
			)
	}
});


module.exports = LoginApp;
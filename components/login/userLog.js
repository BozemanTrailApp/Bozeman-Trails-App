//UsersTrailLog
	//UserLogData
		//UserLog
const React = require('react');
const Link = require('react-router').Link;
const ReactDOM = require('react-dom');

var UserLog = React.createClass({
	componentDidMount: function (){
  		var element = ReactDOM.findDOMNode(this.refs.dropdown)
  			$(element).ready(function() {
    		$('select').material_select();
 			 });
  			//$(this.refs.yourSelectTag).material_select(this._onHikeNameChange.bind(this));
	},
	render: function(){

		return(
			
				<div>
				<div className = "wholeform ">
		    	<form className="col s6 hikeform" onSubmit={ this.props.handleHikeLogSubmit }>
		      	<div className="row">
        			<div className="input-field col s4">
	 		         	<input  type="text" onChange={ this.props.onHikeNameChange } value={ this.props.hikeName } className="validate"/>

 		          		<label className = "blue-text text-lighten-5"> Hike</label>
 		        	</div>
				</div>
		      	<div className="row">
		        	<div className="input-field col s4">
		         		<input  type="date" onChange={ this.props.onDateChange } value={ this.props.date} className="validate"/>
		        	</div>
				</div>
		      	<div className="row">
		        	<div className="input-field col s4">
		         		<input type="text" onChange={ this.props.onMilesChange } value={ this.props.miles } className="validate"/>
		          		<label className = "blue-text text-lighten-5">Enter miles completed</label>
		        	</div>
		        </div>
				<button className="submitlogbutton btn waves-effect waves-light" type="submit" name="action">Submit
	  			</button>
	  		</form>
	 	</div>
	 </div>
			)
	}
});

module.exports = UserLog;






// <div className="input-field col s4">
// 		      <select ref="dropdown" defaultValue="1">
// 		        <option value="" disabled>Choose a Trail!</option>
// 		        <option value="1">Sourdough Trail</option>
// 		        <option value="2">Leverich Canyon Mountain Trail</option>
// 		        <option value="3">Main Street to Peet's Hill</option>
// 		        <option value="4">Gallagator Linear Trail</option>
// 		        <option value="5">Sypes Canyon</option>
// 		      </select>
// 		      <label>Materialize Select</label>       
// 		</div>

//<select ref="dropdown"  defaultValue="1" onChange={ this.props.onHikeNameChange } value={this.props.hikeName}>
//<option disabled>Choose a Trail!</option>
//<option value="SourdougTrail" placeholder="Sourdough Trail">Sourdough Trail</option>
//<option value="Leverich" placeholder="Leverich Canyon Mountain Trail">Leverich Canyon Mountain Trail</option>
//<option value="" placeholder="Main Street to Peet's Hill">Main Street to Peet's Hill</option>
//<option value="" placeholder="Gallagator Linear Trail">Gallagator Linear Trail</option>
//<option value="" placeholder="Sypes Canyon">Sypes Canyon</option>
//</select>   


// <div className="row">
// 	<div className="input-field col s4">
// 	<select onChange={ this.props.onHikeNameChange } value={this.props.hikeName} >
//  	{createItem }
// 	</select>	   
// 	</div>
// </div>

// var createItem = this.props.hikeName.map(function (item, key) {
// 			console.log(item.name);
//       						return (

// 		      						<option 
// 		      							key={key} 
// 		      							value={item.value}>
// 		      							{item.name}
// 		      						</option>

// 	    					)
//     					});

// 			console.log(createItem);

var React = require('react');
var ReactDOM = require('react-dom');

var Sourdough = React.createClass({

	url: "http://snippets.mapmycdn.com/routes/view/embedded/1126105552?width=600&height=400&elevation=true&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=HYBRID&last_updated=2016-06-22T12:16:51-06:00",

	render: function(){
		return (
			<div>
				<h1>Sourdough Trail</h1>
					<div className ="sourMap">
						<iframe height="600px" width="600px" src= {this.ur}/>
					</div>
				
			</div>
			)
	}
});


module.exports = Sourdough;

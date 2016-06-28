var React = require('react');
var Link = require('react-router').Link;

var Leverich = React.createClass({

	
	url: "http://snippets.mapmycdn.com/routes/view/embedded/1129413727?width=600&height=400&elevation=true&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=TERRAIN&last_updated=2016-06-24T10:16:16-06:00",

	render: function(){
		return (

			<div>
				<h1 className = "trailtitle">Leverich Canyon Mountain Trail</h1>

				<div className = "backtotrails">
					<Link to='/trails'> 
							<button className="btn btn-info btn-sm btn-block mainbuttonone">Back to Trails</button>
					</Link>
				</div>

				<div className ="iframeMap">
					<iframe height="600px" width="600px" src = {this.url}/>
				</div>

				

			</div>
			)
	}
});

module.exports = Leverich;
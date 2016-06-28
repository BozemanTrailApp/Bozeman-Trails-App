var React = require('react');
var Link = require('react-router').Link;

var Gallagator = React.createClass({

	url: "http://snippets.mapmycdn.com/routes/view/embedded/1136523637?width=600&height=400&elevation=true&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2016-06-28T14:39:38-06:00",

	render: function(){
		return (

			<div>
				<h1 className = "trailtitle">Gallagator Trail</h1>

				<div className = "backtotrails">
					<Link to='/trails'> 
							<button className="btn btn-default btn-md mainbuttonone">Back to Trails</button>
					</Link>
				</div>

					<div className = "iframeMap">
						<iframe height="600px" width="600px" src= {this.url}/>
					</div>
			</div>
			)
	}
});

module.exports = Gallagator; 
var React = require('react');
var Link = require('react-router').Link;

var mainToPeets = React.createClass({

	url: "http://snippets.mapmycdn.com/routes/view/embedded/1129495984?width=600&height=400&elevation=true&line_color=E60f0bdb&rgbhex=DB0B0E&distance_markers=0&unit_type=imperial&map_mode=HYBRID&last_updated=2016-06-24T11:15:25-06:00",

	render: function(){
		return (

			<div>
				<h1 className = "trailtitle">Main Street to Peet's Hill</h1>

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

module.exports = mainToPeets; 
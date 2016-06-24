var React = require('react');
var Link = require('react-router').Link;

var Trails = React.createClass({
	render: function(){
		return (
			<div>
			    <div className = "trailsbody">

			<div>
			    <h2>Sourdough Trail</h2>
				<h3>A relatively flat, dirt running trail. Suitable for bikes, families, 
				runners, and dog friendly. Can expect to see deer on occasion</h3>
            </div>
            <Link to='./trailPage/sourdough'>
						<button className="btn btn-default">More Info</button>
					</Link>

            <div>
            	<h2>Leverich Canyon Mountain Trail</h2>
            	<h3>You'll find this trailhead in South Bozeman off Nash road. Last driving mile
            	to trailhead is a rough one and more suitable for AWD vehicles. Popular for mountain biking. 
            	Loop trail is approx. 5 miles. Full of switchbacks to challenge you on the way up.</h3> 
            </div>
            <Link to='./trailPage/leverich'>
						<button className="btn btn-default">More Info</button>
					</Link> 


				</div>
			</div>
			)
	}
});

module.exports = Trails;
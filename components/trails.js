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
				runners, and dog friendly. Can expect to see deer on occasion and cross some water.
				Nice easy hike with lots of shade and wildlife. Approx. 3 miles</h3>
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

			<div>
            	<h2>Main Street to Peet's Hill</h2>
            	<h3>Head out off E. Main street onto the Gallagator trail until you reach Peet's Hill.
				Enjoy a loop hike to the top and enjoy an overlooking view of Bozeman. There are some viewing benches 
				at the top which are perfect for sunset watching, and this trail is frequented by bikers, hikers, and dogs. 
				Head back down the loop towards Gallagator and head back towards Main for a bite at one of Bozeman's fine
				restuarant's on Main. We recommend 14 North, Plonk, or The Garage Mesquite Grill.</h3> 
            </div>
            <Link to='./trailPage/mainToPeets'>
						<button className="btn btn-default">More Info</button>
					</Link>
 		



				</div>
			</div>
			)
	}
});

module.exports = Trails;
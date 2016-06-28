var React = require('react');
var Link = require('react-router').Link;

var Trails = React.createClass({
	render: function(){
		return (
			<div>
				<div className = "alltrailsbody">
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
 		
			<div>
            	<h2>Gallagator Linear Trail</h2>
            	<h3>A leveled trail that crosses road occasionally-- suitable for walkers, hikers, runners, bikes, dogs, and families. 
            	Plenty of entry and exit points throughout town. A nice trail to get you from point A to point B within
            	Bozeman while enjoying some water features, nature scenery and dirt tread rather than journey on a typical pavement or 
            	road route.</h3> 
            </div>
            <Link to='./trailPage/gallagator'>
						<button className="btn btn-default">More Info</button>
					</Link>

			<div>
            	<h2>Sypes Canyon // Bridger Foothills Trail</h2>
            	<h3>Some elevation gain but great for runners as well as hikers. Starting from the trailhead at Sypes Canyon Rd., 2 miles out is a nice viewpoint. 
            	You can loop around or opt to keep going when the trail turns into the Bridger Footshills trail at approx 3.11 miles out. Continuing further, you will
            	reah the trailhead for the "M" at about 5.77 and can continue or loop around back to the Sypes trailhead for a loop total of 11.5 miles</h3> 
            </div>
            <Link to='./trailPage/sypes'>
						<button className="btn btn-default">More Info</button>
					</Link>

			<div>
            	<h2>The "M"</h2>
            	<h3>There is an "easy" and "difficult" route to take to get the infamous "M". An easier
            	1 1/2 mile winding path up, or a steeper 3/4 of a mile route will both get you to the top. An iconic hike
            	for any visitors or those new town. </h3> 
            </div>
            <Link to='./trailPage/theM'>
						<button className="btn btn-default">More Info</button>
					</Link>



				</div>
			</div>
		</div>
			)
	}
});

module.exports = Trails;
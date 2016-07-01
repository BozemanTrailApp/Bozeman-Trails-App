var React = require('react');
var Link = require('react-router').Link;

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<div>
					<h1 className="theTitle "> Bozeman.by.trail </h1>
				</div>

					<div className= "fixedbuttons">
					<Link to = '/home'>
						<button className = 'btn'>home</button>
					</Link>
					<Link to = '/profile'>
						<button className = ' btn'>profile</button>
					</Link>
					<Link to ='/login'>
						<button className = ' btn'>login</button>
						</Link>
					</div>

						

					{this.props.children}
					
					
						
				<footer className = 'page-footer grey' >
					<div className = 'footer-copyright'>
						<div className = 'container '>
							<p className = 'white-text'>Brought to you by the minds of Jonathan, Jeslyn, and Lance</p>
						</div>
					</div>
				</footer>
				

			</div>
			)
	}
});

module.exports = Main;



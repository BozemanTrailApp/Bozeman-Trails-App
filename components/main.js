var React = require('react');
var Link = require('react-router').Link;

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<div>
					<h1 className="theTitle"> Bozeman.by.trail </h1>
				</div>

					<div className= "fixedbuttons">
					<Link to = '/home'>
						<button className = 'homemain btn btn-success btn-md'>H O M E</button>
					</Link>
					<Link to = '/profile'>
						<button className = 'profilemain btn btn-default btn-md'>P R O F I L E</button>
					</Link>
					<Link to ='/login'>
						<button className = 'loginmain btn btn-default btn-md'> login </button>
						</Link>
					</div>

						

					{this.props.children}
					
					
						
				<footer id = 'footer'>
					<p>Brought to you by the minds of Jonathan, Jeslyn, and Lance</p>
				</footer>
				

			</div>
			)
	}
});

module.exports = Main;



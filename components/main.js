var React = require('react');
var Link = require('react-router').Link;

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<div>
					<h1 className="theTitle"> Bozeman.by.trail </h1>
				</div>
					<Link to = '/home'>
						<button className = 'btn btn-default btn-xs'>Home</button>
					</Link>		
				<footer id = 'footer'>
					<p>Brought to you by the minds of Jonathan, Jeslyn, and Lance</p>
				</footer>
					  {this.props.children}
			</div>
			)
	}
});

module.exports = Main;



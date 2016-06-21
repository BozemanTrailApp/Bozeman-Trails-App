var React = require('react');
var Link = require('react-router').Link;

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<div className="container jumbotron">
					<h1 className="theTitle">Exploring Bozeman</h1>
					
					
					<Link to='/'> 
						<button className="btn btn-success button1">Home</button>
					</Link>
					<Link to='/about'>
						<button className="btn btn-success button1">About</button>
					</Link>
					{this.props.children}
				</div>	
			</div>
			)
	}
});

module.exports = Main;



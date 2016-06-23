var React = require('react');
var Link = require('react-router').Link;


var Main = React.createClass({
	render: function(){
		return (
			<div>
					<Link to='/profile'>
						<button className="btn btn-info btn-xs mainbuttontwo">Profile</button>
					</Link>

				<div>
					<h1 className="theTitle"> Bozeman.by.trail </h1>
				</div>
					<Link to = '/home'>
						<button className = 'btn btn-default btn-xs'>Home</button>
					</Link>

					
					

					
					
						
					
					

				
					  {this.props.children}
					
			</div>
			)
	}
});

module.exports = Main;



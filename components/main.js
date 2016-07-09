var React = require('react');
var Link = require('react-router').Link;

var Main = React.createClass({
	getInitialState: function(){
		return {
			user: ""
		}
	},

	getOneUserFromServer: function(){
		var self = this;
			$.ajax({
				method:'GET',
				url:'/user'
			}).done(function(data){
				//console.log(data);
				self.setState({ user: data });
			})
	},

	componentDidMount: function(){
		this.getOneUserFromServer();
	},
	logoutUser: function(user){
		var self = this;
		//var user = self.state.user;
		$.ajax({
			url: '/logout',
			method: 'GET', 
			success: function(data){
				$.ajax({
				method:'GET',
				url:'/user'
			}).done(function(data){
				console.log(data);
				self.setState({ user: data });
				window.location = "http://morning-sea-89915.herokuapp.com/"
				})
				//self.setState( data );
				//console.log("Logout successful.", data);
			}.bind(self),
			error: function(xhr, status, err){
				console.error('/logout', status, err.toString());
			}
		})
	},
	render: function(){
		
		if(this.state.user.user !== "anonymous"){
			return(
				<div>
				<div> 
						<div className = "containertitle">
						<div>
							<h1 className="theTitle"> Bozeman.by.trail </h1>
						</div>
						</div> 

						<div className="navbar">
							<Link to = '/home'>
								<button className = ' btn fixedbuttons'>H O M E</button>
							</Link>
							<Link to = '/profile'>
								<button className = ' btn fixedbuttons profilebutton'>P R O F I L E</button>
							</Link>

							<Link to = '/signout'>
								<button className = ' btn signoutbutton ' onClick={ this.logoutUser } 
								type="submit" name="action">Sign out</button>
							</Link>
						</div>
							

						
						{this.props.children}
				</div>
				<div className= "footerall">
				<footer className = 'page-footer grey' >
					<div className = 'footer-copyright'>
						<div className = 'container '>
							<p className = 'white-text'>Brought to you by the minds of Jonathan, Jeslyn, and Lance</p>
						</div>
					</div>
				</footer>
			</div>	
				</div>	
						
					)
		} else {

			return(
				<div>
				<div> 
						<div>
							<h1 className="theTitle"> Bozeman.by.trail </h1>
						</div>
					<div className= "fixedbuttons">
						<Link to = '/home'>
							<button className = 'btn'>home</button>
						</Link>
						<Link to ='/login'>
							<button className = ' btn loginbutton'>login</button>
						</Link>
					</div>
						{this.props.children}
				</div>
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
		}
});

module.exports = Main;



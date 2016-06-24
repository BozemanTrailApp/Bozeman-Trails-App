var React = require('react');

var LogOutForm = require('./logOutForm');


var LogOutData = React.createClass({

	InitialState: function(){
    	return{
      		userName: null,
     		password: null
    	}
  },
 
    handleLogOutSubmit: function(event){
      event.preventDefault();
      console.log(this);
     
      this.handleLogOut();
      this.setState({
        UserName: '' , password: '' 
      });
  },
    handleLogOut: function(){

      $.ajax({
        url:'/user/logout',
        method: 'GET',
        success: function(data){
        }.bind(this),
        error: function(xhr, status, error){
          console.log('/user/logout', status, error.toString());
        }.bind(this)
      })
  }, 
	 render: function(){
		    return (
		      <div>
					<LogOutForm		handleLogOutSubmit={this.handleLogOutSubmit}
						/>
			</div>
		      )
		}
});

module.exports = LogOutData;
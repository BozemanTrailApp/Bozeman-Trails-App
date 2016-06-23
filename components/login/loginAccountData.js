var React = require('react');
var LoginAccountForm = require('./loginAccountForm.js');
    

var LoginAccountData = React.createClass({

    InitialState: function(){
    return{
      userName: null,
      password: null,
     
    }
  },
  handleUserNameLogin: function(event){
    this.setState ({ userName: event.target.value })
  },
  handlePassWordLogin: function(event){
    this.setState ({ password: event.target.value })
  },
  handleLoginSubmit: function(event){
    event.preventDefault();
    console.log(this);
    var user = {};
    user.userName = this.state.userName;
    user.password = this.state.password;

    this.handleLoginPost(user);
    this.setState({
      userName: '' , password: '' 
    });
  },
  handleLoginPost: function(login){

    $.ajax({
      url:'/auth',
      method: 'POST',
      dataType: 'json',
      data: login,
      success: function(data){
        $(".auth").hide();
      }.bind(this),
      error: function(xhr, status, error){
        console.log('/user', status, error.toString());
      }.bind(this)
    })
  }, 


  render: function(){

    return (

      <div>
	       			<LoginAccountForm
                        handleUserNameLogin={this.handleUserNameLogin}
                        handlePasswordLogin={this.handlePasswordLogin}
                        handleLoginSubmit={this.handleLoginSubmit}
                       />
     	</div>

      )
  }
});

module.exports = LoginAccountData;



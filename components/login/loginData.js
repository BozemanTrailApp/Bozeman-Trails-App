var React = require('react');
var LoginForm = require('./loginForm.js');
    

var LoginData = React.createClass({

    InitialState: function(){
    return{
      email: null,
      passWord: null,
      firstName: null,
      lastName: null
    }
  },
  handleEmailLogin: function(event){
    this.setState ({ email: event.target.value })
  },
  handlePassWordLogin: function(event){
    this.setState ({ passWord: event.target.value })
  },
  handleLoginSubmit: function(event){
    event.preventDefault();
    console.log(this);
    var user = {};
    user.email = this.state.email;
    user.passWord = this.state.passWord;

    this.handleLoginPost(user);
    this.setState({
      email: '' , passWord: '' 
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
	       			<LoginForm
                        handleEmailLogin={this.handleEmailLogin}
                        handlePassWordLogin={this.handlePassWordLogin}
                        handleLoginSubmit={this.handleLoginSubmit}
                       />
     	</div>

      )
  }
});

module.exports = LoginData;



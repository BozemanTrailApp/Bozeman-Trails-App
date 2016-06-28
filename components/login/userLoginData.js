//UserAuth
//  UserLoginData
//    UserLoginForm
//  UserSignupData
//    UserSignupForm
//  UserLogout


var React = require('react');
var UserLoginForm = require('./userLoginForm.js');

var UserLoginData = React.createClass({
  getInitialState: function(){
    return {
      userName: "",
      password: "" 
    }
  },

  onUserNameChange: function(event){
    this.setState({ userName: event.target.value })
  },

  onPasswordChange: function(event){
    this.setState({ password: event.target.value })
  },


  handleUserLoginSubmit: function(e){
    e.preventDefault();

    var user = {};
    user.userName = this.state.userName;
    user.password = this.state.password;

    this.props.loginUserFromServer(user);
    this.setState({ userName: '', password: '' });
  },


  render: function(){
    return (
      <div>
        <UserLoginForm handleUserLoginSubmit={ this.handleUserLoginSubmit }
                 onPasswordChange={ this.onPasswordChange }
                 onUserNameChange={ this.onUserNameChange }
                 userName={ this.state.userName }
                 password={ this.state.password }
                 />
      </div>
      )
  }
});

module.exports = UserLoginData;


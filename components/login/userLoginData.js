//UserAuth
//  UserLoginData
//    UserLoginForm
//  UserSignupData
//    UserSignupForm
//  UserLogout


// var React = require('react');
// var UserLoginForm = require('./userLoginForm.js');

// var UserLoginData = React.createClass({
//   getInitialState: function(){
//     return {
//       email: "",
//       password: "" 
//     }
//   },

//   onEmailChange: function(event){
//     this.setState({ email: event.target.value })
//   },

//   onPasswordChange: function(event){
//     this.setState({ password: event.target.value })
//   },


//   handleUserLoginSubmit: function(e){
//     e.preventDefault();

//     var user = {};
//     user.email = this.state.email;
//     user.password = this.state.password;

//     this.props.loginUserFromServer(user);
//     this.setState({ email: '', password: '' });
//   },


//   render: function(){
//     return (
//       <div>
//         <UserLoginForm handleUserLoginSubmit={ this.handleUserLoginSubmit }
//                  onPasswordChange={ this.onPasswordChange }
//                  onEmailChange={ this.onEmailChange }
//                  email={ this.state.email }
//                  password={ this.state.password }
//                  />
//       </div>
//       )
//   }
// });

// module.exports = UserLoginData;
import React, { Component } from 'react';
import { setCookie, getCookie } from '../SelfCookies';

class Login extends Component{


  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event,element) {
    var childrens = event.target.getElementsByTagName("input");
    var request = {};

    for(var i=0;i<childrens.length;i++){
      var child = childrens.item(i);
      request[child.getAttribute("name")] = child.value;
    }

    var _this = this;

    var _axios = require('axios');
    _axios.post("http://localhost:9998/auth",request).then(function(response){
      if(typeof response.data.token !== "undefinde"){
        setCookie("auth_token",response.data.token,{});
        setCookie("auth_refresh_token",response.data.refresh_token,{});
        if(window.location.pathname==="/logout"){
          window.history.pushState("", "", '/');
        }
        _this.props.app.componentDidMount();
      }
      console.log(response,getCookie("auth_token"));
    }).catch(function(error){
      console.log("error",error)
    });

    event.preventDefault();
    return false;
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="user">Пользователь</label>
          <input type="text" placeholder="login" name="user" />
          <label for="password">Пароль</label>
          <input type="password" placeholder="password" name="password" />
          <button>Авторизация</button>
        </form>
      </div>
    );
  }
}
export default Login;

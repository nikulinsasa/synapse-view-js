import React, { Component } from 'react';

import ShowElement from './Controllers/ShowElement';
import ListElements from './Controllers/ListElements';
import Login from './Controllers/Login';
import { getCookie, deleteCookie } from './SelfCookies';
import './App.css';
import { Dimmer, Loader, Image, Segment, Menu } from 'semantic-ui-react'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: (
        <Dimmer active inverted>
          <Loader inverted content='Загрузка' />
        </Dimmer>
      )
    }
  }

  getInitialState() {
    return {
      "text":"hello"
    };
  }

  loadListProxy() {
    var _this = this;
    var _axios = require('axios');
    _axios.get("http://localhost:9998/element/list/proxy",{
      headers:{ Authorization: getCookie("auth_token") }
    })
    .then(function (response) {
      _this.setState({text:<ListElements list={response.data.names} type="proxy" />});
    })
    .catch(function (error) {
      _this.setState({text:error.response.data});
      if(error.response.status===401){
        _this.setState({text:(<Login app={_this} />)});
      }
    });
  }

  loadSynapseElement(element) {
    var _this = this;
    var _axios = require('axios');
    _axios.get("http://localhost:9998/element/"+element,{
      headers:{ Authorization: getCookie("auth_token") }
    })
    .then(function (response) {
      _this.setState({text:<ShowElement xml={response.data} />});
    })
    .catch(function (error) {
      console.log("ERROR",error);
      _this.setState({text:error.response.data});
      if(error.response.status===401){
        _this.setState({text:(<Login app={_this} />)});
      }
    });
  }

  proxyUpdate() {
    var _this = this;
    var _axios = require('axios');
    _axios.get("http://localhost:9998/service/update-proxy",{
      headers:{ Authorization: getCookie("auth_token") }
    })
    .then(function (response) {
      console.log(response);
      window.history.pushState("", "", '/');
      _this.componentDidMount();
    })
    .catch(function (error) {
      _this.setState({text:error.response.data});
      if(error.response.status===401){
        _this.setState({text:(<Login app={_this} />)});
      }
    });
  }

  componentDidMount() {
    var pathname = window.location.pathname;
    if(window.location.pathname==="/"){
      this.loadListProxy();
    }else if(/^\/element\/[0-9A-Za-z_]+$/.test(pathname)){
      this.loadSynapseElement(pathname.replace("\/element\/",""));
      // console.log();
    }else if(pathname==="/logout"){
      deleteCookie("auth_token");
      deleteCookie("auth_refresh_token");
      this.setState({text:(<Login app={this} />)});
    }else if(pathname==="/update-proxy"){
      this.proxyUpdate();
    }
  }

  render() {
    const { activeItem } = this.state || {}
    return (
      <div>
        <div>
          <h2>Синопс визуализатор</h2>
        </div>
        <div>
          
        </div>
        <div>
          {this.state.text}
        </div>
      </div>
    );
  }
}

export default App;

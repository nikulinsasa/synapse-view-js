import React, { Component } from 'react';

import ShowElement from './Controllers/ShowElement';
import ListElements from './Controllers/ListElements';
import Login from './Controllers/Login';
import { getCookie, deleteCookie } from './SelfCookies';
import './App.css';
import { Dimmer, Loader, Image, Segment, Menu, Icon, Message, Label, Grid } from 'semantic-ui-react'

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
    _axios.get(process.env.REACT_APP_SERVER_HOST+"/element/list/proxy",{
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

  errorAction(error) {
    console.log("ERROR",error);
    if(typeof error.response === "undefined"){
      this.setState({text:"Произошла неожиданная ошибка"});
    }
    this.setState({text:error.response.data});
    if(error.response.status===401){
      this.setState({text:(<Login app={this} />)});
    }
  }

  loadListSequencies() {
    var _this = this;
    var _axios = require('axios');
    _axios.get(process.env.REACT_APP_SERVER_HOST+"/element/list/sequency",{
      headers:{ Authorization: getCookie("auth_token") }
    })
    .then(function (response) {
      _this.setState({text:<ListElements list={response.data.names} type="sequency" />});
    })
    .catch(function (error) {
      _this.errorAction(error);
    });
  }

  loadSynapseElement(element) {
    var _this = this;
    var _axios = require('axios');
    _axios.get(process.env.REACT_APP_SERVER_HOST+"/element/"+element,{
      headers:{ Authorization: getCookie("auth_token") }
    })
    .then(function (response) {
      _this.setState({text:<ShowElement xml={response.data} />});
    })
    .catch(function (error) {
      _this.errorAction(error);
    });
  }

  proxyUpdate() {
    var _this = this;
    var _axios = require('axios');
    _axios.get(process.env.REACT_APP_SERVER_HOST+"/service/update-proxy",{
      headers:{ Authorization: getCookie("auth_token") }
    })
    .then(function (response) {
      window.history.pushState("", "", '/');
      _this.componentDidMount();
    })
    .catch(function (error) {

      if(typeof error.response==="undefined"){
        _this.setState({text:(
          <Message warning attached='bottom'>
            <Icon name='warning' />
            Произошла фатальная ошибка
          </Message>
        )});

        return false;
      }

      if(error.response.status===401){
        _this.setState({text:(<Login app={_this} />)});
      }else{
        _this.setState({text:(
          <Message warning attached='bottom'>
            <Icon name='warning' />
            {error.response.message}
          </Message>
        )});
      }
    });
  }

  componentDidMount() {
    var pathname = window.location.pathname;
    if(window.location.pathname==="/"){
      this.setState({text:(
        <h3>Основной список</h3>
      )});
    }else if(window.location.pathname==="/proxy-list"){
      this.loadListProxy();
    }else if(window.location.pathname==="/sequence-list"){
      this.loadListSequencies();
    }else if(/^\/html\/element\/[0-9A-Za-z_]+$/.test(pathname)){
      this.loadSynapseElement(pathname.replace("\/html\/element\/",""));
      // console.log();
    }else if(pathname==="/logout"){
      deleteCookie("auth_token");
      deleteCookie("auth_refresh_token");
      this.setState({text:(<Login app={this} />)});
    }else if(pathname==="/update-proxy"){
      this.proxyUpdate();
    }
  }

  handleItemClick(e, data){
    location.href = '/'+data.name;
  }


  render() {
    const { activeItem } = 'main';

    return (

      <div>
        <div>
          <h2>Синопс визуализатор</h2>
        </div>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={3}>
              <Menu vertical>
                <Menu.Item name='main' active='true' onClick={this.handleItemClick}>
                  Главная
                </Menu.Item>
                <Menu.Item name='proxy-list' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
                  Списос проксей
                </Menu.Item>

                <Menu.Item name='sequence-list' active={activeItem === 'spam'} onClick={this.handleItemClick}>
                  Список sequency
                </Menu.Item>

                <Menu.Item name='endpoint' active={activeItem === 'updates'} onClick={this.handleItemClick}>
                  Список endpoints
                </Menu.Item>

                <Menu.Item name='update-proxy' active={activeItem === 'update-proxy'} onClick={this.handleItemClick}>
                  Обновить
                </Menu.Item>

              </Menu>
              </Grid.Column>
               <Grid.Column width={13}>
                  {this.state.text}
               </Grid.Column>
            </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;

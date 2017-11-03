import React, { Component } from 'react';
import { setCookie, getCookie } from '../SelfCookies';
import { Form, Segment, Button, Grid } from 'semantic-ui-react'

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
    _axios.post(process.env.REACT_APP_SERVER_HOST+"/auth",request).then(function(response){
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
      <Segment>

        <Grid columns={3} center divided>
          <Grid.Row>
            <Grid.Column/>
              <Grid.Column>
                <h3>Авторизация</h3>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group  widths='equal'>
                    <Form.Input label='Пользователь' type='text' name='user' />
                    <Form.Input label='Пароль' type='password' name='password' />
                  </Form.Group>
                  <Form.Group inline>
                    <Button primary>Авторизация</Button>
                  </Form.Group>
                </Form>
              </Grid.Column>
            <Grid.Column/>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
export default Login;

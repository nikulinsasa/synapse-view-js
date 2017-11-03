import React, { Component } from 'react';

import { getCookie, deleteCookie } from '../SelfCookies';
import { Button, Modal, Icon, Form, TextArea } from 'semantic-ui-react'

export default class ShowElement extends Component {

    state = {
      input_example: '',
      output_example: '',
      modalOpen: false,
      id: null ,
      loading: true
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleClose = () => this.setState({ modalOpen: false })

    handlerSubmit = (e,target) => {
      console.log("__SUBMIT_SATET__",target);
      var _this = this;
      var id = this.state.id;
      var _axios = require('axios');
      var methodSend = null;
      _this.setState({ 'loading': true });
      if(id===null){
        methodSend = _axios.post(process.env.REACT_APP_SERVER_HOST+"/rest/example",{
          name: this.props.name,
          input_example: this.state.input_example,
          output_example: this.state.output_example
        },{
          headers:{ Authorization: getCookie("auth_token") }
        });
      }else{
        methodSend = _axios.put(process.env.REACT_APP_SERVER_HOST+"/rest/example/"+id,{
          input_example: this.state.input_example,
          output_example: this.state.output_example
        },{
          headers:{ Authorization: getCookie("auth_token") }
        });
      }
      methodSend.then(function (response) {
        console.log("__EXAMPLE__",response);
        _this.setState({ 'loading': false });
        _this.setState({ 'modalOpen': false });
      })
      .catch(function (error) {
        alert(error.response.statusText);
        _this.setState({ 'loading': false });
        console.log("__EXAMPLE__",error);
      });

    }

    onOpen = (event, data) => {
      var _this = this;
      this.setState({ 'modalOpen': true });
      _this.setState({ 'loading': true });
      var _axios = require('axios');
      _axios.get(process.env.REACT_APP_SERVER_HOST+"/rest/example?name="+this.props.name,{
        headers:{ Authorization: getCookie("auth_token") }
      })
      .then(function (response) {
        console.log('__EXAMPLE__',response);
        if(typeof response.data.list !== 'undefined' && response.data.list.length>0){
            _this.setState({ 'id': response.data.list[0].id });
            _this.setState({ 'input_example': response.data.list[0].input_example });
            _this.setState({ 'output_example': response.data.list[0].output_example });
        }
        _this.setState({ 'loading': false });
      })
      .catch(function (error) {
        console.log('__EXAMPLE__',error);
        alert(error.response.statusText);
        _this.setState({ 'modalOpen': false });
      });
    }

    render() {
        const { input_example, output_example, loading } = this.state;
        return (
          <Modal onClose={this.handleClose} onOpen={this.onOpen} closeIcon='true' open={this.state.modalOpen} trigger={<Button icon color='black'>
            <Icon name='write'/>
          </Button>}>
              <Modal.Header>Редактирование входящего запроса</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                    <Form onSubmit={this.handlerSubmit} loading={loading}>
                        <Form.Field control={TextArea} label='Пример запроса'
                            name='input_example' onChange={this.handleChange}
                            value={input_example}
                            placeholder='Тут текст с примером запроса на endpoint, есть желание пиши описание' />
                        <Form.Field control={TextArea} label='Пример ответа'
                            name='output_example' onChange={this.handleChange}
                            value={output_example}
                            placeholder='Тут текст с примером запроса на endpoint, есть желание пиши описание' />
                            <Button color='green'>
                              Save
                            </Button>
                    </Form>
                </Modal.Description>
              </Modal.Content>
            </Modal>
        );
    }
}

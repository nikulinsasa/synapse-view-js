import React, { Component } from 'react';
import Endpoint from './Endpoint'
import { Card, Icon, Image } from 'semantic-ui-react'

class SendMediator extends Component {
  render() {

    var _endpoint = "";
    if(this.props.endpoint!==undefined){
      var key = this.props.key+"_endpoint";
      _endpoint = (<Endpoint key={key} values={this.props.endpoint} />);
    }
    return (
      <Card.Group itemsPerRow={1}>
        <Card raised='true' centered='true'>
          <Image src='/icons/send.svg' centered='true' title={this.props.type} alt={this.props.type} />
          <Card.Content>
            <Card.Header></Card.Header>
            <Card.Description>
              {_endpoint}
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}

export default SendMediator;

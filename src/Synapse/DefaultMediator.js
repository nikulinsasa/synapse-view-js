import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

class DefaultMediator extends Component {
  render() {
    return <Card.Group itemsPerRow={1}>
      <Card raised='true' centered='true'>
        <Card.Content>
          <Card.Header>
             неизвестный
          </Card.Header>
          <Card.Description>
            {this.props.value}
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>;
  }
}

export default DefaultMediator;

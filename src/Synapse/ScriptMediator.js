import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import DescriptionOfMediator from './DescriptionOfMediator'

export default class ScriptMediator extends Component {
  render() {

    return (
      <Card.Group itemsPerRow={1}>
        <Card raised='true' centered='true'>
          <Image src='/icons/script.svg' centered='true' title={this.props.type} alt={this.props.type} />
          <Card.Content>
            <Card.Header>{this.props.value.attributes.description.value}</Card.Header>
            <Card.Description>
              <DescriptionOfMediator descriptionObject={this.props.value} />
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}

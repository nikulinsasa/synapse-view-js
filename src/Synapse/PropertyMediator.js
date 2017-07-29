import React, { Component } from 'react';
import { Card, Icon, Image, Segment } from 'semantic-ui-react'

class PropertyMediator extends Component {
  render() {

    var value = "?";
    if(typeof this.props.value.attributes.value !== "undefined"){
      value = this.props.value.attributes.value.value;
    }else{
      value = "Вычесляемое из "+this.props.value.attributes.expression.value;
    }

    return (
      <Card.Group itemsPerRow={1}>
        <Card raised='true' centered='true'>
          <Card.Content>
            <Card.Header>
               {this.props.value.tagName} с именем "{this.props.value.attributes.name.value}"
            </Card.Header>
            <Card.Description>
              Со занчением <strong>{value}</strong>
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}

export default PropertyMediator;

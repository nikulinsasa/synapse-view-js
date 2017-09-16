import React, { Component } from 'react';
import PropertyMediator from './PropertyMediator'
import { Card, Icon, Image } from 'semantic-ui-react'
import DescriptionOfMediator from './DescriptionOfMediator'

class LogMediator extends Component {

  render() {
    var index=this.key+"_"+this.props.type;
    var level = "";
    if(typeof this.props.value.attributes.level !== "undefined"){
      level = this.props.value.attributes.level.value;
    }

    var properties = [];

    var _properties = this.props.value.getElementsByTagName("property");
    for(var i=0;i<_properties.length;i++){
        var _propertyIndex = index+"property"+i;

        properties.push(<PropertyMediator key={_propertyIndex} value={_properties[i]} />);
    }


    return (
      <Card.Group itemsPerRow={1}>
        <Card raised='true' centered='true'>
          <Image src='/icons/log.svg' centered='true' title='Итератор' alt='Итератор' />
          <Card.Content>
            <Card.Header>
               {level}
            </Card.Header>
            <Card.Description>
              <DescriptionOfMediator descriptionObject={this.props.value} />
            </Card.Description>
            <Card.Description>
              {properties}
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}

export default LogMediator;

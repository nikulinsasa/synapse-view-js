import React, { Component } from 'react';
import Sequence from './Sequence'
import { Card, Icon, Image, Segment, Accordion, Label } from 'semantic-ui-react'

class SwitchMediator extends Component {
  render() {

    var cases = this.props.value.getElementsByTagName('case');

    var elements = [];
    for(var i=0;i<cases.length;i++){
      var _key = this.props.key+"_switch"+i;
      elements.push(<Accordion.Title><Label color='pink'>
      <Icon name='dropdown' />
      {cases.item(i).attributes.regex.value}
    </Label></Accordion.Title>);
      elements.push(<Accordion.Content>
        <Sequence key={_key} index={_key} name='sequence' type="switch" sequences={cases.item(i).children} />
        </Accordion.Content>
      );
    }

    return (
      <Card.Group itemsPerRow={1}>
        <Card raised='true' centered='true'>
          <Image src='/icons/filter.svg' centered='true' title={this.props.type} alt={this.props.type} />
          <Card.Content>
            <Card.Header>{this.props.value.attributes.source.value}</Card.Header>
            <Card.Description><Accordion>{elements}</Accordion></Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}

export default SwitchMediator;

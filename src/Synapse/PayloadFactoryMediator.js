import React, { Component } from 'react';
import { Card, Icon, Image, Segment } from 'semantic-ui-react'

export default class PayloadFactoryMediator extends Component {
  render() {
    var args = this.props.value.getElementsByTagName("arg");

    var listItems = [];
    for(var i=0;i<args.length;i++){
        var arg = args[i];
        listItems.push((<Segment>{typeof arg.attributes.expression==="undefined"?arg.attributes.expression.value.value:arg.attributes.expression.value}</Segment>));
    }
    var xmlFormat = this.props.value.getElementsByTagName("format")[0];
    console.log("payload",xmlFormat);
    var format = xmlFormat.innerHTML.trim();
    return (
      <Card.Group itemsPerRow={1}>
        <Card raised='true' centered='true'>
          <Image src='/icons/payloadFactory.svg' centered='true' title={this.props.type} alt={this.props.type} />
          <Card.Content>
            <Card.Header>{this.props.value.attributes["media-type"].value}</Card.Header>
            <Card.Description>
               <pre>{format}</pre>
            </Card.Description>
            <Card.Description>
              <Segment.Group>
                <Segment inverted color='teal'>Аругменты:</Segment>
                {listItems}
              </Segment.Group>
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}

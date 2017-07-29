import React, { Component } from 'react';
import { Card, Icon, Image, Segment } from 'semantic-ui-react'

export default class EnrichMediator extends Component {

  render() {
      var source = this.props.value.querySelector("source");
      var target = this.props.value.querySelector("target");

      var sourceAttributes = [];
      for(var i=0;i<source.attributes.length;i++){
          sourceAttributes.push( (<div>{source.attributes[i].name}="{source.attributes[i].value}"</div>) );
      }

      var targetAttributes = [];
      for(var i=0;i<target.attributes.length;i++){
          targetAttributes.push( (<div>{source.attributes[i].name}="{target.attributes[i].value}"</div>) );
      }

      return (
        <Card.Group itemsPerRow={1}>
          <Card raised='true' centered='true'>
            <Image src='/icons/enrich.svg' centered='true' title={this.props.type} alt={this.props.type} />
            <Card.Content>
              <Card.Description>
                <Segment>Источник {sourceAttributes}</Segment>
                <Segment>Цель {targetAttributes}</Segment>
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      );

  }

}

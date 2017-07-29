import React, { Component } from 'react';
import Sequence from './Sequence'
import { Card, Icon, Image, Segment } from 'semantic-ui-react'

export default class AggregateMediator extends Component {
  render() {
      var value = this.props.value;
      var sequence = value.querySelector("onComplete");
      var _key = this.props.key+"_aggregator";
      return (
          <Card.Group itemsPerRow={1}>
            <Card raised='true' centered='true'>
              <Image src='/icons/iterator.svg' centered='true' title='Агрегатор' alt='Агрегатор' />
              <Card.Content>
                <Card.Header>
                   {sequence.attributes.expression.value}
                </Card.Header>
                <Card.Description>
                  <Sequence key={_key} index={_key} name='sequence' type="aggregator" sequences={sequence.children} />
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
      );
  }
}

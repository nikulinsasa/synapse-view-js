import React, { Component } from 'react';
import Sequence from './Sequence'
import { Card, Icon, Image } from 'semantic-ui-react'

export default class IteratorMediator extends Component {

    render() {
        var value = this.props.value;
        var sequence = value.querySelector("target > sequence");
        var _key = this.props.key+"_iterator";
        return (
          <Card.Group itemsPerRow={1}>
            <Card raised='true' centered='true'>
              <Image src='/icons/iterator.svg' centered='true' title='Итератор' alt='Итератор' />
              <Card.Content>
                <Card.Header>
                   {value.attributes.expression.value}
                </Card.Header>
                <Card.Description>
                  <Sequence displayMediator={this.props.displayMediator} key={_key} index={_key} name='sequence' type="iterator" sequences={sequence.children} />
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        );
    }
}

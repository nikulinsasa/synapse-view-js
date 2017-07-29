import React, { Component } from 'react';

import DefaultMediator from './DefaultMediator'
import MediatorFactory from './MediatorFactory'
import { Card, Icon, Image, Segment } from 'semantic-ui-react'

class Sequence extends Component {
  render() {
    var _sequences = [];
    var _mediatorElements = [];
    var i=0;
    var sequenceName = "";
    console.log("SEQUENCES",this.props);
    if(this.props.sequence!==undefined){
      _sequences = this.props.sequence.children;
      if(this.props.sequence.attributes!==undefined){
        sequenceName = this.props.sequence.attributes.key.value;
      }
    }else if(this.props.sequences!==undefined) {
      _sequences = this.props.sequences;
    }
    for(var i=0;i<_sequences.length;i++){
      var key=_sequences[i].tagName+"_"+i;
      _mediatorElements.push(<MediatorFactory key={key} index={key} type={_sequences[i].tagName} values={_sequences[i]} />);
    }

    if(sequenceName!==""){
      return (
        <Card.Group itemsPerRow={1}>
          <Card raised='true' centered='true'>
            <Image src='/icons/sequence.svg' centered='true' title={this.props.type} alt={this.props.type} />
            <Card.Content>
              <Card.Header>
                 {sequenceName}
              </Card.Header>
              <Card.Description>
                {_mediatorElements}
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      );
    } else {
      return (
        <Segment color='gray'>{_mediatorElements}</Segment>
      );
    }

  }
}

export default Sequence;

import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import MediatorFactory from './MediatorFactory'

class ProxyMediator extends Component {
  render() {

    var _target = this.props.target.children[0];

    var _mediatorElements = [];
    var key = "";

    for(var i=0;i<_target.children.length;i++){

      if(_target.children[i].tagName === "inSequence"){
        key=this.props.index+"_in";
       _mediatorElements.push(<MediatorFactory key={key} index={key} type="in" values={_target.children[i]} />);
      }
      if(_target.children[i].tagName === "outSequence"){
        key=this.props.index+"_out";
        _mediatorElements.push(<MediatorFactory key={key} index={key} type="out" values={_target.children[i]} />);
      }
    }
    var name = _target.parentNode.attributes.name.value;
    key=this.props.index+"_arrow";
    // _mediatorElements.push(<div key={key}>&#x2193;</div>);
    return (
      <Card.Group itemsPerRow={1} className='mediator'>
        <Card raised='true' centered='true'>
          <Image src='/icons/proxy.svg' height={75} centered='true' title={this.props.type} alt={this.props.type} />
          <Card.Content>
            <Card.Header>
               {name}
            </Card.Header>
            <Card.Description>
              {_mediatorElements}
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}

export default ProxyMediator;

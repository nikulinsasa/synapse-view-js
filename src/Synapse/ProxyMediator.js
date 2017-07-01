import React, { Component } from 'react';

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
    _mediatorElements.push(<div key={key}>&#x2193;</div>);
    return (
      <div className="mediator mediator-sequence">
        <div className="mediator-icon">
          <img src={"/icons/proxy.svg"} alt="proxy" />
          <div className="mediator-label">proxy</div>
        </div>
        <div className="mediator-name">{name}</div>
        <div>{_mediatorElements}</div>
      </div>
    );
  }
}

export default ProxyMediator;

import React, { Component } from 'react';

import MediatorFactory from './MediatorFactory'

class ProxyMediator extends Component {
  render() {
    var _target = this.props.target;
    var _mediatorElements = [];
    var key=this.props.index+"_in";
    _mediatorElements.push(<MediatorFactory key={key} index={key} type="sequence" values={this.props.target.target[0].inSequence[0]} />);
    key=this.props.index+"_out";
    _mediatorElements.push(<MediatorFactory key={key} index={key} type="sequence" values={this.props.target.target[0].outSequence[0]} />);
    key=this.props.index+"_arrow";
    _mediatorElements.push(<div key={key}>&#x2193;</div>);
    return (
      <div className="mediator mediator-sequence">
        <div className="mediator-icon">
          <img src={"icons/proxy.svg"} alt="proxy" />
          <div className="mediator-label">proxy</div>
        </div>
        <div className="mediator-name">{_target.$.name}</div>
        <div>{_mediatorElements}</div>
      </div>
    );
  }
}

export default ProxyMediator;

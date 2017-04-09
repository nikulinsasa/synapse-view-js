import React, { Component } from 'react';

import DefaultMediator from './DefaultMediator'
import MediatorFactory from './MediatorFactory'


class Sequence extends Component {
  render() {
    var _sequences = this.props.sequences;
    var _mediatorElements = [];

      for(var i=0;i<_sequences.length;i++){
        var key=this.props.index+"_"+i;
        try{
          _mediatorElements.push(<MediatorFactory key={key} index={key} type={_sequences[i].type} values={_sequences[i]} />);
        }catch(e){
          _mediatorElements.push(<DefaultMediator name="error" />);
        }
        _mediatorElements.push(<div>&#x2193;</div>);
      }


    return (
      <div className="mediator mediator-sequence">
        <div className="mediator-icon">
          <img src={"icons/sequence.svg"} alt="sequence" />
          <div className="mediator-label">sequence</div>
        </div>
        <div>{_mediatorElements}</div>
      </div>
    );
  }
}

export default Sequence;

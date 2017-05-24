import React, { Component } from 'react';

import DefaultMediator from './DefaultMediator'
import MediatorFactory from './MediatorFactory'


class Sequence extends Component {
  render() {

    var _sequences = this.props.sequences;
    var _mediatorElements = [];
    var i=0;
    var sequenceName = "";
    if(this.props.sequences.$!==undefined){
      sequenceName = this.props.sequences.$.key;
    }
    for(var index in _sequences){
      if(index==="$"){
        continue;
      }
      var key=index+"_"+i;
      try{
        _mediatorElements.push(<MediatorFactory key={key} index={key} type={index} values={_sequences[index][0]} />);
      }catch(e){
        _mediatorElements.push(<DefaultMediator name="error" value={e} />);
      }
      var arrowKey = key+"_arrow";
      _mediatorElements.push(<div key={arrowKey}>&#x2193;</div>);
    }


    return (
      <div className="mediator mediator-sequence">
        <div className="mediator-icon">
          <img src={"icons/sequence.svg"} alt="sequence" />
          <div className="mediator-label">{this.props.type}</div>
        </div>
        <div className="mediator-name">{sequenceName}</div>
        <div>{_mediatorElements}</div>
      </div>
    );
  }
}

export default Sequence;

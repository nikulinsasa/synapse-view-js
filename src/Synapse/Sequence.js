import React, { Component } from 'react';

import DefaultMediator from './DefaultMediator'
import MediatorFactory from './MediatorFactory'


class Sequence extends Component {
  render() {
    console.log("SEQUENCE",this.props);
    var _sequences = this.props.sequences;
    var _mediatorElements = [];
    var i=0;
    var sequenceName = "";
    if(this.props.sequences.$!==undefined){
      sequenceName = this.props.sequences.$.key;
    }
    for(var i=0;i<_sequences.length;i++){
      console.log(_sequences[i]);
      var key=_sequences[i].tagName+"_"+i;
      _mediatorElements.push(<MediatorFactory key={key} index={key} type={_sequences[i].tagName} values={_sequences[i]} />);
    }
    // for(var index in _sequences){
    //   console.log(index);
    //   if(index==="$"){
    //     continue;
    //   }
    //   for(var i=0;i<_sequences[index].length;i++){
    //     var key=index+"_"+i;
    //     try{
    //       _mediatorElements.push(<MediatorFactory key={key} index={key} type={index} values={_sequences[index][i]} />);
    //     }catch(e){
    //       _mediatorElements.push(<DefaultMediator name="error" value={e} />);
    //     }
    //     var arrowKey = key+"_arrow";
    //     _mediatorElements.push(<div key={arrowKey}>&#x2193;</div>);
    //   }
    // }


    return (
      <div className="mediator mediator-sequence">
        <div className="mediator-icon">
          <img src={"/icons/sequence.svg"} alt="sequence" />
          <div className="mediator-label">{this.props.type}</div>
        </div>
        <div className="mediator-name">{sequenceName}</div>
        <div>{_mediatorElements}</div>
      </div>
    );
  }
}

export default Sequence;

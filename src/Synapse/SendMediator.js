import React, { Component } from 'react';
import Endpoint from './Endpoint'

class SendMediator extends Component {
  render() {

    var _endpoint = "";
    if(this.props.endpoint.$!==undefined){
      var key = this.props.key+"_endpoint";
      _endpoint = (<Endpoint key={key} values={this.props.endpoint} />);
    }
    return (
      <div className="mediator mediator-send">
        <div className="mediator-icon">
          <img src={"/icons/send.svg"} alt="sequence" />
          <div className="mediator-label">{this.props.type}</div>
        </div>
        <div className="meidator-poropties">
          {_endpoint}
        </div>
      </div>
    );
  }
}

export default SendMediator;

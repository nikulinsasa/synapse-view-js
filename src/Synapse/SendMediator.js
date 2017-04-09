import React, { Component } from 'react';

class SendMediator extends Component {
  render() {
    return (
      <div className="mediator mediator-send">
        <div className="mediator-icon">
          <img src={"icons/send.svg"} alt="sequence" />
          <div className="mediator-label">send</div>
        </div>
      </div>
    );
  }
}

export default SendMediator;

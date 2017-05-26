import React, { Component } from 'react';

export default class ScriptMediator extends Component {
  render() {
    
    return (
      <div className="mediator mediator-script">
        <div className="mediator-icon">
          <img src={"/icons/script.svg"} alt="script" />
          <div className="mediator-label">script</div>
        </div>
        <div className="meidator-poropties">
          <div>LANGUAGE <b>{this.props.value.$.language}</b></div>
          <div>{this.props.value._}</div>
        </div>
      </div>
    );
  }
}

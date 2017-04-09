import React, { Component } from 'react';


class DefaultMediator extends Component {
  render() {
    return <div className="mediator mediator-default">
      <div className="mediator-label">неизвестный</div>
      <div>{this.props.name}</div>
    </div>;
  }
}

export default DefaultMediator;

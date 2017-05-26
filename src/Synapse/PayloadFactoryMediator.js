import React, { Component } from 'react';

export default class PayloadFactoryMediator extends Component {
  render() {

    const listItems = this.props.value.args[0].arg.map((number) =>
      <li>{number.$.expression}{number.$.value}</li>
    );
    var format = typeof this.props.value.format[0] === "string" ? this.props.value.format[0] : JSON.stringify(this.props.value.format[0]);
    return (
      <div className="mediator mediator-property">
        <div className="mediator-icon">
          <img src={"/icons/payloadFactory.svg"} alt="payload" />
          <div className="mediator-label">payload</div>
        </div>
        <div>
          <div>{this.props.value.$.type}</div>
          <div>{format}</div>
          <div>ARGS:</div>
          <ul>{listItems}</ul>
        </div>
      </div>
    );
  }
}

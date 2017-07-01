import React, { Component } from 'react';

export default class PayloadFactoryMediator extends Component {
  render() {
    var args = this.props.value.getElementsByTagName("arg");

    var listItems = [];
    for(var i=0;i<args.length;i++){
        var arg = args[i];
        listItems.push((<li>{typeof arg.attributes.expression==="undefined"?arg.attributes.expression.value.value:arg.attributes.expression.value}</li>));
    }
    var xmlFormat = this.props.value.getElementsByTagName("format")[0];
    var format = xmlFormat.outerHTML;
    return (
      <div className="mediator mediator-payload">
        <div className="mediator-icon">
          <img src={"/icons/payloadFactory.svg"} alt="payload" />
          <div className="mediator-label">payload</div>
        </div>
        <div>
          <div>{this.props.value.attributes["media-type"].value}</div>
          <div className="mediator-payload-format"><pre>{format}</pre></div>
          <div>ARGS:</div>
          <ul>{listItems}</ul>
        </div>
      </div>
    );
  }
}

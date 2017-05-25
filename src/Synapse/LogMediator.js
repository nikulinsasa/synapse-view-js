import React, { Component } from 'react';
import PropertyMediator from './PropertyMediator'

class LogMediator extends Component {

  render() {
    var index=this.key+"_"+this.props.type;
    var level = "";
    if(typeof this.props.level !== "undefined"){
      level = this.props.level;
    }

    var properties = [];

    if(typeof this.props.properties !== "undefined"){

      for(var i=0;i<this.props.properties.length;i++){
        var _propertyIndex = index+"property"+i;
        var value = this.props.properties[i].$.value !== undefined ? this.props.properties[i].$.value : this.props.properties[i].$.expression;
        properties.push(<PropertyMediator key={_propertyIndex} name={this.props.properties[i].$.name} value={value} />);
      }
    }
    console.log(properties);

    return (
      <div className="mediator mediator-log">
        <div className="mediator-icon">
          <img src={"/icons/log.svg"} alt="sequence" />
          <div className="mediator-label">log</div>
        </div>
        <div>{level}</div>
        <div>{properties}</div>
      </div>
    );
  }
}

export default LogMediator;

import React, { Component } from 'react';
import PropertyMediator from './PropertyMediator'

class LogMediator extends Component {

  render() {
    console.log("LOG",this.props);
    var index=this.key+"_"+this.props.type;
    var level = "";
    if(typeof this.props.value.attributes.level !== "undefined"){
      level = this.props.value.attributes.level.value;
    }

    var properties = [];

    var _properties = this.props.value.getElementsByTagName("property");
    for(var i=0;i<_properties.length;i++){
        var _propertyIndex = index+"property"+i;

        properties.push(<PropertyMediator key={_propertyIndex} value={_properties[i]} />);
    }


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

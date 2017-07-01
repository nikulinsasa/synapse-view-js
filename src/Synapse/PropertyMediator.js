import React, { Component } from 'react';

class PropertyMediator extends Component {
  render() {
    console.log("PROPERTY_MEDIATOR",this.props.value);
    var value = "?";
    if(typeof this.props.value.attributes.value !== "undefined"){
      value = this.props.value.attributes.value.value;
    }else{
      value = this.props.value.attributes.expression.value;
    }
    console.log(value);
    return (
      <div className="mediator mediator-property">
        <div className="mediator-label">{this.props.value.tagName}</div>
        <div>
          {this.props.value.attributes.name.value} => {value}
        </div>
      </div>
    );
  }
}

export default PropertyMediator;

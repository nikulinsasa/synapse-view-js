import React, { Component } from 'react';
import { Card, Icon, Image, Segment } from 'semantic-ui-react'

class Endpoint extends Component {

  render() {
    var name = "ПУСТОЙ";
    var address="";

    if(typeof this.props.values.attributes!=="undefined" && typeof this.props.values.attributes.key!=="undefined"){
      name = this.props.values.attributes.key.value;
    }
    console.log("endpoints",this.props.values.attributes,name);
    return (
      <Segment color='green'>
        <div>{name}</div>
        <div>{address}</div>
      </Segment>
    );
  }
}

export default Endpoint;

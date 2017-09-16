import React, { Component } from 'react';
import { Card, Icon, Image, Segment } from 'semantic-ui-react'
import DescriptionOfMediator from './DescriptionOfMediator'

class Endpoint extends Component {

  render() {
    var name = "ПУСТОЙ";
    var address="";

    if(typeof this.props.values.attributes!=="undefined" && typeof this.props.values.attributes.key!=="undefined"){
      name = this.props.values.attributes.key.value;
    }
    console.log("endpoints",this.props);
    return (
      <Segment color='green'>
        <div>
          <DescriptionOfMediator descriptionObject={this.props.value} />
        </div>
        <div>{name}</div>
        <div>{address}</div>
      </Segment>
    );
  }
}

export default Endpoint;

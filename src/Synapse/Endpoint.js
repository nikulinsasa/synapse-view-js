import React, { Component } from 'react';


class Endpoint extends Component {

  render() {
    var name = "";
    if(this.props.values.$!==undefined){
      name = this.props.values.$.key;
    }
    return (
      <div className="mediator mediator-endpoint">
          <div className="mediator-label">ENDPOINT</div>
          <div className="mediator-name">name = {name}</div>
      </div>
    );
  }
}

export default Endpoint;

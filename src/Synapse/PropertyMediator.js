import React, { Component } from 'react';

class PropertyMediator extends Component {
  render() {
    return (
      <div className="mediator mediator-property">
        <div className="mediator-label">property</div>
        <div>
          {this.props.name} => {this.props.value}
        </div>
      </div>
    );
  }
}

export default PropertyMediator;

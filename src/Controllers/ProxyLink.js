import React, { Component } from 'react';

export default class ProxyLink extends Component {

  render() {
    var link = "/element/"+this.props.name;
    return (
      <div>
        <a href={link} data-name={this.props.name}>{this.props.name}</a>
      </div>
    );
  }
}

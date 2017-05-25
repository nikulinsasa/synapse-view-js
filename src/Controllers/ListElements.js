import React, { Component } from 'react';
import { getCookie } from '../SelfCookies';
import ProxyLink from './ProxyLink';

class ListElements extends Component {


  render() {
    var list = [];
    if(this.props.type==="proxy"){
        list = this.props.list.map((index)=>
          <li><ProxyLink key={index} name={index} /></li>
        );
    }
    return (
      <div>
        <h2>Активные {this.props.type}</h2>
        <ol>{list}</ol>
      </div>
    );
  }
}

export default ListElements

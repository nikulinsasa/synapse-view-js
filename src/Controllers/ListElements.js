import React, { Component } from 'react';
import { getCookie } from '../SelfCookies';
import ProxyLink from './ProxyLink';
import { List } from 'semantic-ui-react';

class ListElements extends Component {


  render() {
    var list = [];
    if(this.props.type==="proxy"){
        list = this.props.list.map((index)=>
          <List.Item><ProxyLink key={index} name={index} /></List.Item>
        );
    }
    return (
      <div>
        <h2>Активные {this.props.type}</h2>
        <List celled ordered>{list}</List>
      </div>
    );
  }
}

export default ListElements

import React, { Component } from 'react';
import { getCookie } from '../SelfCookies';
import ProxyLink from './ProxyLink';
import SequencyLink from './SequencyLink';
import { List } from 'semantic-ui-react';

class ListElements extends Component {


  render() {
    var list = [];
    console.log("ListElements",this.props);
    if(this.props.type==="proxy"){
        list = this.props.list.map((index)=>
          <List.Item><ProxyLink key={index.name} name={index.name} /></List.Item>
        );
    }
    if(this.props.type==="sequency"){
        list = this.props.list.map((index)=>
          <List.Item><SequencyLink key={index.name} parents={index.parents} name={index.name} /></List.Item>
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

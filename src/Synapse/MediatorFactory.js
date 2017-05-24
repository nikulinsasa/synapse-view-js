import React, { Component } from 'react';

import Sequence from './Sequence'
import PropertyMediator from './PropertyMediator'
import SendMediator from './SendMediator'
import DefaultMediator from './DefaultMediator'
import LogMediator from './LogMediator'
import ProxyMediator from './ProxyMediator'

class MediatorFactory extends Component{


  render(){

    if(typeof this.props.type === "undefined" ){
      return (<DefaultMediator name='Тип не передан' />);
    }
    // console.log("PROPS",this.props);
    var index=this.key+"_"+this.props.type;

    switch(this.props.type){
      case "sequence":
      case "in":
      case "out":
        return (<Sequence key={index} index={index} name='sequence' type={this.props.type} sequences={this.props.values} />);
      case "proxy":
        return (<ProxyMediator key={index} index={index} name='proxy' target={this.props.values} />);
      case "property":
        return (<PropertyMediator key={index} name={this.props.values.$.name} value={this.props.values.$.value} />);
      case "send":
          var endpoint = {};
          if(this.props.values.endpoint!==undefined){
            endpoint = this.props.values.endpoint[0];
          }
          return (<SendMediator key={index} endpoint={endpoint} />);
      case "log":
          return (<LogMediator key={index} index={index} properties={this.props.values.property} />);
      default:
        return (<DefaultMediator key={index} name='Неизвестный' />);
    }
  }

}

export default MediatorFactory;

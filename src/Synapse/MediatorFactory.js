import React, { Component } from 'react';

import Sequence from './Sequence'
import PropertyMediator from './PropertyMediator'
import SendMediator from './SendMediator'
import DefaultMediator from './DefaultMediator'
import LogMediator from './LogMediator'
import ProxyMediator from './ProxyMediator'
import ScriptMediator from './ScriptMediator'
import FilterMediator from './FilterMediator'
import PayloadFactoryMediator from './PayloadFactoryMediator'

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
      case "header":
        return (<PropertyMediator type={this.props.type} key={index} name={this.props.values.$.name} value={this.props.values.$.value} />);
      case "send":
      case "call":
          var endpoint = {};
          if(this.props.values.endpoint!==undefined){
            endpoint = this.props.values.endpoint[0];
          }
          return (<SendMediator type={this.props.type} key={index} endpoint={endpoint} />);
      case "log":
          return (<LogMediator key={index} index={index} properties={this.props.values.property} />);
      case "filter":
          return (<FilterMediator value={this.props.values} />);
      case "script":
          return (<ScriptMediator key={index} value={this.props.values} />);
      case "payloadFactory":
          return (<PayloadFactoryMediator key={index} value={this.props.values} />);
      default:
        return (<DefaultMediator key={index} name='Неизвестный' value={this.props.type} />);
    }
  }

}

export default MediatorFactory;

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
import IteratorMediator from './IteratorMediator'
import AggregateMediator from './AggregateMediator'
import EnrichMediator from './EnrichMediator'

class MediatorFactory extends Component{


  render(){
    console.log("NODE_FACTORY",this.props);
    if(typeof this.props.type === "undefined" ){
      return (<DefaultMediator name='Тип не передан' />);
    }
    // console.log("PROPS",this.props);
    var index=this.props.tagName+"_"+this.props.type;
    console.log(this.props.values.tagName);
    switch(this.props.values.tagName){
      case "sequence":
      case "inSequence":
      case "outSequence":
        return (<Sequence key={index} index={index} name='sequence' type={this.props.type} sequences={this.props.values.children} />);
      case "proxy":
        return (<ProxyMediator key={index} index={index} name='proxy' target={this.props.values} />);
      case "property":
      case "header":
        return (<PropertyMediator key={index} value={this.props.values} />);
      case "send":
      case "call":
          var endpoint = {};
          if(this.props.values.endpoint!==undefined){
            endpoint = this.props.values.endpoint[0];
          }
          return (<SendMediator type={this.props.type} key={index} endpoint={endpoint} />);
      case "log":
          return (<LogMediator key={index} index={index} value={this.props.values} />);
      case "filter":
          return (<FilterMediator value={this.props.values} />);
      case "script":
          return (<ScriptMediator key={index} value={this.props.values} />);
      case "payloadFactory":
          return (<PayloadFactoryMediator key={index} value={this.props.values} />);
      case "iterate":
          return (<IteratorMediator key={index} value={this.props.values} />);
      case "aggregate":
          return (<AggregateMediator key={index} value={this.props.values} />);
      case "enrich":
          return (<EnrichMediator key={index} value={this.props.values} />);
      default:
        return (<DefaultMediator key={index} name='Неизвестный' value={this.props.type} />);
    }
  }

}

export default MediatorFactory;

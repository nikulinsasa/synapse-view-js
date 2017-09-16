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
import SwitchMediator from './SwitchMediator'

class MediatorFactory extends Component{


  render(){



    if(typeof this.props.type === "undefined" ){
      return (<DefaultMediator name='Тип не передан' />);
    }
    // console.log("PROPS",this.props);
    var index=this.props.tagName+"_"+this.props.type;

    switch(this.props.values.tagName){
      case "sequence":
        return (<Sequence key={index} displayMediator={this.props.displayMediator} index={index} name='sequence' type={this.props.type} sequence={this.props.values} />);
      case "inSequence":
      case "outSequence":
        return (<Sequence key={index} displayMediator={this.props.displayMediator} index={index} name='sequence' type={this.props.type} sequences={this.props.values.children} />);
      case "proxy":
        return (<ProxyMediator displayMediator={this.props.displayMediator} key={index} index={index} name='proxy' target={this.props.values} />);
      case "property":
      case "header":

        if(typeof this.props.displayMediator==="undefined" || this.props.displayMediator.property){
          console.log("displayMediator",this.props.displayMediator);
          return (<PropertyMediator key={index} value={this.props.values} />);
        }else{
          return (<div/>);
        }
      case "send":
      case "call":

          var endpoints = this.props.values.getElementsByTagName('endpoint');
          var endpoint = {};
          if(endpoints.length>0){
            endpoint = endpoints.item(0);
          }

          return (<SendMediator type={this.props.type} key={index} endpoint={endpoint} />);
      case "log":
          return (<LogMediator key={index} index={index} value={this.props.values} />);
      case "filter":
          return (<FilterMediator displayMediator={this.props.displayMediator} value={this.props.values} />);
      case "script":
          return (<ScriptMediator key={index} value={this.props.values} />);
      case "payloadFactory":
          return (<PayloadFactoryMediator key={index} value={this.props.values} />);
      case "iterate":
          return (<IteratorMediator displayMediator={this.props.displayMediator} key={index} value={this.props.values} />);
      case "aggregate":
          return (<AggregateMediator displayMediator={this.props.displayMediator} key={index} value={this.props.values} />);
      case "enrich":
          return (<EnrichMediator key={index} value={this.props.values} />);
      case "switch":
          return (<SwitchMediator displayMediator={this.props.displayMediator} key={index} value={this.props.values} />);
      default:
        return (<DefaultMediator key={index} name='Неизвестный' value={this.props.type} />);
    }
  }

}

export default MediatorFactory;
